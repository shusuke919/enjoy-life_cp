export type HomeSlug = "nakata" | "misono" | "kyuhoji" | "comingsoon";

export type Home = {
  slug: HomeSlug;
  name: string;
  short: string;
  area: string;
  rooms: string;
  type: string;
  features: string[];
  color: string;
};

export const homes: Home[] = [
  {
    slug: "nakata",
    name: "ピース八尾 中田",
    short: "中田",
    area: "大阪府八尾市",
    rooms: "定員 4名（男性）",
    type: "共同生活援助",
    features: ["満床", "男性専用"],
    color: "#5BB8D6",
  },
  {
    slug: "misono",
    name: "ピース八尾 美園",
    short: "美園",
    area: "大阪府八尾市",
    rooms: "定員 5名（男性）",
    type: "共同生活援助",
    features: ["1部屋空きあり", "男性専用"],
    color: "#6FBA6C",
  },
  {
    slug: "kyuhoji",
    name: "ピース八尾 久宝寺",
    short: "久宝寺",
    area: "大阪府八尾市",
    rooms: "定員 5名（男性）",
    type: "共同生活援助",
    features: ["2部屋空きあり", "男性専用"],
    color: "#F5A73F",
  },
  {
    slug: "comingsoon",
    name: "ピース八尾 4号店（仮称）",
    short: "Coming Soon",
    area: "大阪府八尾市",
    rooms: "近日公開",
    type: "共同生活援助",
    features: ["2026年開設予定"],
    color: "#E85A8A",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "入居までにどのくらい時間がかかりますか？",
    a: "ご相談から入居まで、通常1〜2ヶ月ほどお時間をいただいております。受給者証の有無や、見学・体験利用のスケジュールによって前後いたします。まずはお気軽にご相談ください。",
  },
  {
    q: "見学や体験利用はできますか？",
    a: "はい、いつでも見学を受け付けております。実際の生活を体感いただける体験利用（1泊2日〜）もご用意しておりますので、お問い合わせフォームまたはお電話にてお申し付けください。",
  },
  {
    q: "利用料金はどのくらいですか？",
    a: "障がい福祉サービス費は所得に応じた自己負担（月額0円〜37,200円）と、家賃・食費・光熱費等の実費がかかります。詳細は各事業所によって異なりますので、個別にご案内いたします。",
  },
  {
    q: "対象となる障がいの種別は？",
    a: "身体障がい・知的障がい・精神障がいのいずれの方もご利用いただけます。障がい支援区分は問いません。医療的ケアが必要な方はご相談ください。",
  },
  {
    q: "家族との面会や外泊はできますか？",
    a: "もちろん可能です。ご家族との時間はとても大切だと考えております。外泊・帰省もご本人の希望に合わせて自由にしていただけます。",
  },
];

export type HeroSlide = { label: string; tone: string };

export const heroImages: HeroSlide[] = [
  { label: "リビングで過ごす穏やかな時間", tone: "#FDE8D4" },
  { label: "仲間と一緒に作る夕食", tone: "#E4F1DC" },
  { label: "近所の公園へのお散歩", tone: "#DCECF4" },
];

export type Value = { c: string; t: string; d: string };

export const values: Value[] = [
  { c: "#5BB8D6", t: "自分らしく", d: "その人の“好き”や“やりたい”を起点に、暮らしを組み立てます。" },
  { c: "#6FBA6C", t: "安心して", d: "医療・福祉・地域と連携した24時間体制で、もしもの時も安心。" },
  { c: "#F5A73F", t: "つながりの中で", d: "地域行事や余暇活動を通じて、暮らしに彩りを添えます。" },
  { c: "#E85A8A", t: "自立へ", d: "就労支援機関と連携し、一人ひとりの“次の一歩”を応援します。" },
];

export type Service = { title: string; body: string; c: string };

export const services: Service[] = [
  { title: "居住支援", body: "個室での生活を基本に、共用のリビング・ダイニングで仲間との時間も。", c: "#5BB8D6" },
  { title: "食事提供", body: "栄養バランスを考えた毎日の食事。一緒に作ることもできます。", c: "#F5A73F" },
  { title: "健康管理", body: "服薬管理・通院同行・医療機関との連携で健康を守ります。", c: "#6FBA6C" },
  { title: "余暇支援", body: "趣味・外出・地域交流まで、“楽しい”を大切に。", c: "#E85A8A" },
];

export type FlowStep = { step: string; title: string; d: string; c: string };

export const flow: FlowStep[] = [
  { step: "01", title: "お問い合わせ", d: "お電話またはフォームよりご連絡ください。ご相談内容を丁寧に伺います。", c: "#5BB8D6" },
  { step: "02", title: "見学・面談", d: "実際のホームをご覧いただき、生活の様子や支援内容をご説明します。", c: "#6FBA6C" },
  { step: "03", title: "体験利用", d: "1泊2日〜の体験で、ホームの雰囲気をじっくり感じてください。", c: "#F5A73F" },
  { step: "04", title: "アセスメント", d: "ご本人・ご家族・関係機関と共に、支援計画を作成します。", c: "#E85A8A" },
  { step: "05", title: "ご入居", d: "受給者証の準備が整い次第、ご入居となります。新しい暮らしの始まりです。", c: "#5BB8D6" },
];

export const navItems = [
  { id: "about", label: "enjoy lifeについて" },
  { id: "service", label: "事業内容" },
  { id: "homes", label: "事業所一覧" },
  { id: "flow", label: "入居までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "contact", label: "お問い合わせ" },
];

export type RepBio = { year: string; body: string };

export const representative = {
  role: "代表取締役",
  badge: "Founder & CEO",
  name: "佐々木 智也",
  nameEn: "Tomoya Sasaki",
  bio: [
    { year: "2008", body: "都内福祉法人にて生活支援員として従事" },
    { year: "2014", body: "サービス管理責任者・施設長を歴任" },
    { year: "2022", body: "株式会社enjoy life 設立" },
    { year: "資格", body: "社会福祉士／精神保健福祉士" },
  ] satisfies RepBio[],
};
