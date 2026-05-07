import type { Metadata } from "next";
import { Zen_Maru_Gothic, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "株式会社enjoy life｜障がい者グループホーム",
  description:
    "株式会社enjoy lifeは、障がいのある方が自分らしく安心して暮らせる障がい者グループホーム（共同生活援助）を大阪府八尾市内4拠点で展開しています（うち1拠点は2026年開設予定）。",
  keywords: [
    "enjoy life",
    "障がい者グループホーム",
    "共同生活援助",
    "障がい福祉",
    "自立支援",
    "八尾市",
    "大阪府",
    "ピース八尾",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenMaru.variable} ${notoSansJp.variable}`}>
      {/* suppressHydrationWarning: silence hydration mismatch when password
          manager extensions (Bitwarden, etc.) inject attributes onto <body>
          before React hydrates. Scoped to body — does not affect descendants. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
