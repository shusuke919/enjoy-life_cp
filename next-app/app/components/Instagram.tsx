import Image from "next/image";
import { instagram } from "../lib/data";
import { fetchInstagramPosts, postAltText } from "../lib/instagram";

export default async function Instagram() {
  // 取得できなかった場合は空配列。写真の帯を出さず、紹介文とリンクだけの表示になる
  const posts = await fetchInstagramPosts(6);

  // 端まで途切れずに流すため、1周分を画面幅より長くしてから2周ぶん並べる。
  // 帯全体を50%ずらすと、2周目の先頭が1周目の先頭と重なって継ぎ目が見えなくなる
  const lap = [...posts, ...posts];
  const track = [...lap, ...lap];

  return (
    <section className="va-section va-insta" id="instagram">
      <div className="va-insta-head reveal">
        <div className="va-section-label">
          <span style={{ background: "#E85A8A" }} /> Instagram
        </div>
        <h2 className="va-insta-title">
          日々の暮らしは、
          {/* スマホでも改行を残す。折り返しに任せると「Instagram / で。」と割れる */}
          <br />
          Instagramで。
        </h2>
        <p className="va-insta-text">
          みんなでの食事、季節の行事、ちょっとしたおでかけ。
          ホームでのふだんの様子を発信しています。
        </p>
        <a
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="va-insta-btn"
        >
          <span className="va-insta-glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5.5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </span>
          @{instagram.handle}
          <span className="va-arrow">→</span>
        </a>
      </div>

      {posts.length > 0 && (
        <div className="va-insta-marquee">
          <div className="va-insta-track">
            {track.map((post, i) => (
              <a
                // 同じ投稿を何度も並べるため、キーは並びの位置で作る
                key={`${post.id}-${i}`}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="va-insta-tile"
                // 2周目以降は見た目を埋めるための複製。読み上げと操作は1周目だけに任せる
                aria-hidden={i >= lap.length ? true : undefined}
                tabIndex={i >= lap.length ? -1 : undefined}
              >
                <Image
                  src={post.imageUrl}
                  alt={i >= lap.length ? "" : postAltText(post)}
                  fill
                  sizes="240px"
                  style={{ objectFit: "cover" }}
                />
                {post.isVideo && (
                  <span className="va-insta-video" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5.5v13l11-6.5z" />
                    </svg>
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
