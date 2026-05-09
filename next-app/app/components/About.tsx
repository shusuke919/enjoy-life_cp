import type { CSSProperties } from "react";
import { representative, values } from "../lib/data";
import PlaceholderArt from "./PlaceholderArt";

export default function About() {
  return (
    <section className="va-section va-about" id="about">
      <div className="va-section-head reveal">
        <div className="va-section-label">
          <span style={{ background: "#6FBA6C" }} /> About us
        </div>
        <h2 className="va-section-title">
          「楽しむ」を、
          <br />
          あたりまえの毎日に。
        </h2>
      </div>
      <div className="va-about-grid">
        <div className="va-about-message reveal">
          <div className="va-rep-card">
            <div className="va-rep-photo">
              <PlaceholderArt tone="#F5A73F22" label="代表写真" idx={0} small />
              <div className="va-rep-ring" />
              <div className="va-rep-badge">{representative.badge}</div>
            </div>
            <div className="va-rep-meta">
              <div className="va-rep-role">{representative.role}</div>
              <h3 className="va-rep-name">
                {representative.name}
                <span>{representative.nameEn}</span>
              </h3>
              <ul className="va-rep-bio">
                {representative.bio.map((b) => (
                  <li key={b.year}>
                    <span>{b.year}</span>
                    {b.body}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p>
            enjoy lifeという社名には、「人生を楽しむ」という願いを込めました。
            障がいの有無にかかわらず、誰もが自分のペースで、好きなことをして、
            信頼できる誰かと笑い合える——そんな当たり前の日々を支えたい。
          </p>
          <p>
            私たちのグループホームは、365日スタッフが寄り添う「もう一つの家」です。
            食事・入浴・服薬などの生活支援はもちろん、趣味や就労、地域とのつながりまで、
            お一人おひとりの「やってみたい」に寄り添います。お一人おひとりの歩幅を尊重し、
            小さな「できた」を一緒に積み重ねていくこと——それが私たちの誇りです。
          </p>
          <div className="va-sign">
            <span className="va-sign-label">{representative.role}</span>
            <span className="va-sign-name">{representative.name}</span>
          </div>
        </div>
        <div className="va-about-values">
          {values.map((v, i) => (
            <div
              key={v.t}
              className="va-value-card reveal"
              style={{ ["--accent" as string]: v.c, transitionDelay: `${i * 80}ms` } as CSSProperties}
            >
              <div className="va-value-num">0{i + 1}</div>
              <div className="va-value-dot" style={{ background: v.c }} />
              <h3>{v.t}</h3>
              <p>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
