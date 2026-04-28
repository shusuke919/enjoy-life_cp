import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { homes, type HomeSlug } from "../../lib/data";
import { homeDetails } from "../../lib/homeDetails";
import PdfToolbar from "./PdfToolbar";
import "./brochure.css";

const slugs = homes.map((h) => h.slug);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const home = homes.find((h) => h.slug === slug);
  if (!home) return { title: "Not Found" };
  return {
    title: `パンフレット - ${home.name}｜enjoy life`,
    description: `${home.name}のパンフレット（A4 / DUMMY）。`,
  };
}

export default async function PdfBrochurePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const home = homes.find((h) => h.slug === slug);
  const detail = home ? homeDetails[home.slug as HomeSlug] : null;
  if (!home || !detail) notFound();

  const accent = home.color;

  return (
    <div className="pdf-page">
      <PdfToolbar />
      <div className="pdf-doc" style={{ ["--accent" as string]: accent } as CSSProperties}>
        <div className="badge">DUMMY PAMPHLET</div>
        <div className="label" style={{ color: accent }}>
          <span className="dot" />
          {detail.en}
        </div>
        <h1>
          {home.name}
          <small>障害者グループホーム / 共同生活援助</small>
        </h1>
        <div className="area">{detail.fullAddress}</div>
        <div className="photo" style={{ background: accent }} />
        <table>
          <tbody>
            <tr>
              <th>サービス種別</th>
              <td>共同生活援助（グループホーム）</td>
            </tr>
            <tr>
              <th>定員</th>
              <td>{home.rooms}</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>{detail.fullAddress}</td>
            </tr>
            <tr>
              <th>特徴</th>
              <td>{home.features.join(" / ")}</td>
            </tr>
            <tr>
              <th>運営</th>
              <td>株式会社 enjoy life</td>
            </tr>
          </tbody>
        </table>
        <p>
          enjoy lifeは、障害のある方が地域で自分らしく暮らすためのグループホームを運営しています。
          お一人おひとりの「やってみたい」を尊重し、24時間体制で生活全般をサポートします。
        </p>
        <p>
          食事提供、入浴・服薬等の日常支援、医療機関との連携、余暇活動の企画運営まで、
          暮らしに必要なすべての支援をワンストップで提供します。見学・体験利用は随時受け付けております。
        </p>
        <div className="foot">
          <span>株式会社 enjoy life</span>
          <span>03-0000-0000 / info@enjoy-life.example</span>
        </div>
      </div>
    </div>
  );
}
