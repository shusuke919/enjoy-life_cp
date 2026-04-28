import type { CSSProperties } from "react";
import { services } from "../lib/data";
import ServiceIcon from "./ServiceIcon";

export default function Service() {
  return (
    <section className="va-section va-service" id="service">
      <div className="va-section-head reveal">
        <div className="va-section-label">
          <span style={{ background: "#5BB8D6" }} /> Our service
        </div>
        <h2 className="va-section-title">
          障害者グループホーム
          <br />
          <small>（共同生活援助）</small>
        </h2>
      </div>
      <div className="va-service-grid">
        <div className="va-service-copy reveal">
          <p className="va-lead">
            共同生活援助（グループホーム）は、障害のある方が
            <strong>地域の住まいで、少人数で共同生活</strong>
            を送るためのサービスです。
          </p>
          <p>
            世話人・生活支援員が、食事の提供、入浴、金銭管理、健康管理、余暇活動のサポートなど、
            暮らし全般のお手伝いをします。日中は就労や通所、夜は&ldquo;ただいま&rdquo;と帰ってこられる。
            そんな、ごく普通の毎日を守ることが、私たちの仕事です。
          </p>
        </div>
        <div className="va-service-cards">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="va-svc-card reveal"
              style={{ ["--accent" as string]: s.c, transitionDelay: `${i * 70}ms` } as CSSProperties}
            >
              <div className="va-svc-icon" style={{ background: s.c + "22", color: s.c }}>
                <ServiceIcon type={i} color={s.c} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
