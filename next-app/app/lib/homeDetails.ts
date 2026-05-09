import type { HomeSlug } from "./data";

export type PricingItem = {
  label: string;
  amount: number;
  note?: string;
};

export type Pricing = {
  items: PricingItem[];
  total: number;
  note?: string;
};

export type HomeDetail = {
  en: string;
  index: string;
  fullAddress: string;
  spec: { dt: string; dd: string }[];
  access: { label: string; body: string }[];
  pricing?: Pricing;
};

export const homeDetails: Record<HomeSlug, HomeDetail> = {
  nakata: {
    en: "NAKATA",
    index: "01",
    fullAddress: "〒581-0014 大阪府八尾市中田1-3 友田コーポ141",
    spec: [
      { dt: "定員", dd: "4名（男性）" },
      { dt: "空床状況", dd: "満床" },
      { dt: "対象", dd: "身体・知的・精神障がい" },
      { dt: "支援体制", dd: "世話人・生活支援員 / 夜間支援あり" },
    ],
    access: [
      { label: "所在地", body: "〒581-0014 大阪府八尾市中田1-3 友田コーポ141" },
    ],
    pricing: {
      items: [
        { label: "家賃", amount: 24500 },
        { label: "家賃補助", amount: -10000, note: "家賃補助対象の方のみ" },
        { label: "食費", amount: 27000 },
        { label: "水道光熱費", amount: 10000 },
        { label: "日用品", amount: 3000 },
        { label: "通信費", amount: 2000 },
      ],
      total: 56500,
      note: "別途、所得に応じて障がい福祉サービス費が必要になる場合があります。",
    },
  },
  misono: {
    en: "MISONO",
    index: "02",
    fullAddress: "〒581-0018 大阪府八尾市美園町3-78-1 ピアパーク美園401・402",
    spec: [
      { dt: "定員", dd: "5名（男性）" },
      { dt: "空床状況", dd: "1部屋空きあり" },
      { dt: "対象", dd: "身体・知的・精神障がい" },
      { dt: "支援体制", dd: "世話人・生活支援員 / 夜間支援あり" },
    ],
    access: [
      { label: "所在地", body: "〒581-0018 大阪府八尾市美園町3-78-1 ピアパーク美園401・402" },
    ],
    pricing: {
      items: [
        { label: "家賃", amount: 28000 },
        { label: "家賃補助", amount: -10000, note: "家賃補助対象の方のみ" },
        { label: "食費", amount: 27000 },
        { label: "水道光熱費", amount: 10000 },
        { label: "日用品", amount: 3000 },
        { label: "通信費", amount: 2000 },
      ],
      total: 60000,
      note: "別途、所得に応じて障がい福祉サービス費が必要になる場合があります。",
    },
  },
  kyuhoji: {
    en: "KYUHOJI",
    index: "03",
    fullAddress: "〒581-0076 大阪府八尾市南久宝寺3-48-2 ハイツ南久宝寺302・303",
    spec: [
      { dt: "定員", dd: "5名（男性）" },
      { dt: "空床状況", dd: "2部屋空きあり" },
      { dt: "対象", dd: "身体・知的・精神障がい" },
      { dt: "支援体制", dd: "世話人・生活支援員 / 夜間支援あり" },
    ],
    access: [
      { label: "所在地", body: "〒581-0076 大阪府八尾市南久宝寺3-48-2 ハイツ南久宝寺302・303" },
    ],
    pricing: {
      items: [
        { label: "家賃", amount: 28000 },
        { label: "家賃補助", amount: -10000, note: "家賃補助対象の方のみ" },
        { label: "食費", amount: 27000 },
        { label: "水道光熱費", amount: 10000 },
        { label: "日用品", amount: 3000 },
        { label: "通信費", amount: 2000 },
      ],
      total: 60000,
      note: "別途、所得に応じて障がい福祉サービス費が必要になる場合があります。",
    },
  },
  comingsoon: {
    en: "COMING SOON",
    index: "04",
    fullAddress: "2026年開設予定（大阪府八尾市内）",
    spec: [
      { dt: "開設予定", dd: "2026年" },
      { dt: "所在地", dd: "大阪府八尾市内（詳細は近日公開）" },
      { dt: "定員", dd: "近日公開" },
      { dt: "対象", dd: "身体・知的・精神障がい" },
    ],
    access: [
      { label: "所在地", body: "大阪府八尾市内（詳細は近日公開）" },
    ],
  },
};

export const dailySchedule = [
  { time: "7:00", title: "起床・朝食", body: "1日の始まり。スタッフと体調を確認しながら、朝食をいただきます。" },
  { time: "9:00", title: "日中活動へ", body: "就労支援B型・生活介護など各自の通所先へ出発。" },
  { time: "17:00", title: "帰宅・夕食", body: "“ただいま”のあとは、みんなで夕食。時には外食イベントや誕生日会も。" },
  { time: "22:00", title: "就寝", body: "夜間もスタッフが対応します。安心しておやすみいただけます。" },
];
