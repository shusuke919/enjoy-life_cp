"use client";

export default function PdfToolbar() {
  return (
    <div className="pdf-toolbar">
      <a href="javascript:history.back()">← 戻る</a>
      <button type="button" onClick={() => window.print()}>
        印刷 / PDF保存
      </button>
    </div>
  );
}
