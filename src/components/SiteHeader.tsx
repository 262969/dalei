"use client";

export default function SiteHeader() {
  return (
    <div className="site-header flex-y" style={{ margin: "20px 0 40px", alignItems: "center" }}>
      <h1 className="sitename" style={{ fontSize: "80px", fontWeight: 700, color: "#ffffff", lineHeight: "normal" }}>
        Software Hub
      </h1>
      <p className="des" style={{ color: "#939393", marginTop: "8px", fontSize: "16px", lineHeight: "normal" }}>
        A demo Next.js static site — educational project, not affiliated with any real service
      </p>
    </div>
  );
}
