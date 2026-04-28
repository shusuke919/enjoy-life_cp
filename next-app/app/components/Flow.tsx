import type { CSSProperties } from "react";
import { flow } from "../lib/data";

export default function Flow() {
  return (
    <section className="va-section va-flow" id="flow">
      <div className="va-section-head reveal">
        <div className="va-section-label">
          <span style={{ background: "#E85A8A" }} /> Flow
        </div>
        <h2 className="va-section-title">入居までの流れ</h2>
      </div>
      <div className="va-flow-timeline">
        {flow.map((f, i) => (
          <div
            key={f.step}
            className="va-flow-item reveal"
            style={{ ["--accent" as string]: f.c, transitionDelay: `${i * 80}ms` } as CSSProperties}
          >
            <div className="va-flow-step" style={{ background: f.c }}>
              {f.step}
            </div>
            <div className="va-flow-card">
              <h3>{f.title}</h3>
              <p>{f.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
