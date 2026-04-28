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
  title: "株式会社enjoy life｜障害者グループホーム",
  description:
    "株式会社enjoy lifeは、障害のある方が自分らしく安心して暮らせる障害者グループホーム（共同生活援助）を東京都内4拠点で運営しています。",
  keywords: [
    "enjoy life",
    "障害者グループホーム",
    "共同生活援助",
    "障害福祉",
    "自立支援",
    "世田谷区",
    "杉並区",
    "武蔵野市",
    "国分寺市",
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
