import type { HomeSlug } from "./data";

export type HomeDetail = {
  en: string;
  index: string;
  fullAddress: string;
  spec: { dt: string; dd: string }[];
  access: { label: string; body: string }[];
};

export const homeDetails: Record<HomeSlug, HomeDetail> = {
  nakata: {
    en: "NAKATA",
    index: "01",
    fullAddress: "〒581-0014 大阪府八尾市中田1-3 友田コーポ141",
    spec: [
      { dt: "定員", dd: "4名（男性）" },
      { dt: "空床状況", dd: "満床" },
      { dt: "対象", dd: "身体・知的・精神障がい（区分問わず）" },
      { dt: "支援体制", dd: "世話人・生活支援員 / 夜間支援あり" },
    ],
    access: [
      { label: "所在地", body: "〒581-0014 大阪府八尾市中田1-3 友田コーポ141" },
    ],
  },
  misono: {
    en: "MISONO",
    index: "02",
    fullAddress: "〒581-0018 大阪府八尾市美園町3-78-1 ピアパーク美園401・402",
    spec: [
      { dt: "定員", dd: "5名（男性）" },
      { dt: "空床状況", dd: "1部屋空きあり" },
      { dt: "対象", dd: "身体・知的・精神障がい（区分問わず）" },
      { dt: "支援体制", dd: "世話人・生活支援員 / 夜間支援あり" },
    ],
    access: [
      { label: "所在地", body: "〒581-0018 大阪府八尾市美園町3-78-1 ピアパーク美園401・402" },
    ],
  },
  kyuhoji: {
    en: "KYUHOJI",
    index: "03",
    fullAddress: "〒581-0076 大阪府八尾市南久宝寺3-48-2 ハイツ南久宝寺302・303",
    spec: [
      { dt: "定員", dd: "5名（男性）" },
      { dt: "空床状況", dd: "2部屋空きあり" },
      { dt: "対象", dd: "身体・知的・精神障がい（区分問わず）" },
      { dt: "支援体制", dd: "世話人・生活支援員 / 夜間支援あり" },
    ],
    access: [
      { label: "所在地", body: "〒581-0076 大阪府八尾市南久宝寺3-48-2 ハイツ南久宝寺302・303" },
    ],
  },
  comingsoon: {
    en: "COMING SOON",
    index: "04",
    fullAddress: "2026年開設予定（大阪府八尾市内）",
    spec: [
      { dt: "開設予定", dd: "2026年" },
      { dt: "所在地", dd: "大阪府八尾市内（詳細は近日公開）" },
      { dt: "定員", dd: "近日公開" },
      { dt: "対象", dd: "身体・知的・精神障がい（区分問わず）" },
    ],
    access: [
      { label: "所在地", body: "大阪府八尾市内（詳細は近日公開）" },
    ],
  },
};

export const dailySchedule = [
  { time: "7:00", title: "起床・朝食", body: "世話人と一緒に朝食を準備。服薬の確認も行います。" },
  { time: "9:00", title: "日中活動へ", body: "就労支援B型・生活介護など各自の通所先へ出発。" },
  { time: "17:00", title: "帰宅・夕食", body: "“ただいま”のあとは、みんなで夕食。週1で外食イベントも。" },
  { time: "22:00", title: "就寝", body: "夜間も支援員が常駐。安心しておやすみいただけます。" },
];
