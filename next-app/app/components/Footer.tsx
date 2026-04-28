import Image from "next/image";

export default function Footer() {
  return (
    <footer className="va-footer">
      <div className="va-footer-top">
        <div className="va-footer-brand">
          <Image
            src="/assets/logo.jpg"
            alt="enjoy life"
            className="va-footer-logo"
            width={160}
            height={50}
          />
          <p>
            人生を、楽しむ。
            <br />
            そのあたりまえを、ここから。
          </p>
        </div>
        <div className="va-footer-cols">
          <div>
            <h4>会社情報</h4>
            <a href="#about">enjoy lifeについて</a>
            <a href="#service">事業内容</a>
            <a href="#homes">事業所一覧</a>
          </div>
          <div>
            <h4>ご検討中の方へ</h4>
            <a href="#flow">入居までの流れ</a>
            <a href="#faq">よくある質問</a>
            <a href="#contact">お問い合わせ</a>
          </div>
          <div>
            <h4>所在地</h4>
            <p>
              〒000-0000
              <br />
              東京都○○区○○ 0-0-0
              <br />
              enjoy lifeビル 3F
            </p>
          </div>
        </div>
      </div>
      <div className="va-footer-bottom">
        <small>© 2026 enjoy life Inc. All rights reserved.</small>
        <div className="va-footer-dots">
          <span style={{ background: "#5BB8D6" }} />
          <span style={{ background: "#6FBA6C" }} />
          <span style={{ background: "#F5A73F" }} />
          <span style={{ background: "#E85A8A" }} />
        </div>
      </div>
    </footer>
  );
}
