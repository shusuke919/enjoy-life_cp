/**
 * Instagramの投稿写真の取得。
 *
 * Instagram API with Instagram Login（graph.instagram.com）を使う。旧Basic Display APIは
 * 2024年12月に廃止されているため、プロアカウント（ビジネス/クリエイター）が前提。
 * セットアップ手順は docs/instagram-setup.md を参照。
 *
 * 取得に失敗してもサイトは落とさない。呼び出し側は空配列を「写真なし」として扱い、
 * Instagramへのリンクカードだけを表示する。
 */

const API_VERSION = "v23.0";
const ENDPOINT = `https://graph.instagram.com/${API_VERSION}/me/media`;

/** 写真の取り直し間隔（秒）。CDNのURLには有効期限があるため長く持ちすぎない */
const REVALIDATE_SECONDS = 3600;

export type InstagramPost = {
  id: string;
  caption: string;
  /** 表示に使う画像。動画・リールの場合はサムネイル */
  imageUrl: string;
  permalink: string;
  timestamp: string;
  isVideo: boolean;
};

type ApiMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

type ApiResponse = {
  data?: ApiMedia[];
  error?: { message?: string; type?: string; code?: number };
};

/**
 * 直近の投稿を取得する。
 *
 * @param limit 取得件数
 * @returns 表示できる投稿の配列。未設定・失敗時は空配列
 */
export async function fetchInstagramPosts(limit = 6): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    // 未設定はエラーではない（連携前・プレビュー環境）。リンクカードだけが出る
    return [];
  }

  const url = new URL(ENDPOINT);
  url.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
  );
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("access_token", token);

  let json: ApiResponse;
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    json = (await res.json()) as ApiResponse;

    if (!res.ok || json.error) {
      // 最も多いのはトークンの失効（60日）。事務局が気づけるよう理由を残す
      console.error("[instagram] 投稿の取得に失敗しました", {
        status: res.status,
        error: json.error,
      });

      return [];
    }
  } catch (e) {
    console.error("[instagram] 投稿の取得に失敗しました", e);

    return [];
  }

  return (json.data ?? [])
    .map(toPost)
    .filter((post): post is InstagramPost => post !== null);
}

/**
 * next.config.ts の remotePatterns で許可している配信元。
 *
 * next/image は許可外のホストを渡されると例外を投げ、トップページごと500になる。Instagramの
 * 配信元はMeta側の都合で変わりうるため、描画に渡す前にここで弾いて写真だけを落とす。
 */
const ALLOWED_IMAGE_HOSTS = [".cdninstagram.com", ".fbcdn.net"];

function isAllowedImageUrl(url: string): boolean {
  try {
    const { protocol, hostname } = new URL(url);

    return (
      protocol === "https:" &&
      ALLOWED_IMAGE_HOSTS.some((suffix) => hostname.endsWith(suffix))
    );
  } catch {
    return false;
  }
}

/**
 * APIの応答を表示用に整える。画像が引けないものは落とす。
 *
 * 動画・リールは media_url が動画ファイルそのものになるため、サムネイルを使う。
 * カルーセルは先頭の画像が media_url に入る。
 */
function toPost(media: ApiMedia): InstagramPost | null {
  const isVideo = media.media_type === "VIDEO";
  const imageUrl = isVideo ? media.thumbnail_url : media.media_url;

  if (!imageUrl) {
    return null;
  }

  if (!isAllowedImageUrl(imageUrl)) {
    console.error("[instagram] 想定外の配信元だったため写真を除外しました", {
      id: media.id,
      host: URL.canParse(imageUrl) ? new URL(imageUrl).hostname : "(解析不能)",
    });

    return null;
  }

  return {
    id: media.id,
    caption: media.caption ?? "",
    imageUrl,
    permalink: media.permalink,
    timestamp: media.timestamp,
    isVideo,
  };
}

/**
 * 写真の代替テキスト。
 *
 * キャプションはハッシュタグや改行を含む長文になりがちなので、読み上げに耐える程度に詰める。
 * キャプションが無い投稿もあるため、その場合は投稿日で位置づけを伝える。
 */
export function postAltText(post: InstagramPost): string {
  const head = post.caption
    .replace(/#[^\s#]+/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 60);

  if (head !== "") {
    return head;
  }

  const date = new Date(post.timestamp);

  return `${date.getFullYear()}年${date.getMonth() + 1}月のInstagram投稿`;
}
