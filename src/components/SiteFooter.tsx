import Image from "next/image";

export default function SiteFooter() {
  return (
    <div className="foot" style={{ margin: "20px auto 10px", padding: "10px 15px" }}>
      <span className="time" style={{ display: "block", fontSize: "13px", textAlign: "center", color: "#b3b3b3" }}>
        Copyright &copy; 2025 Software Hub Demo — Built with Next.js for educational purposes
      </span>
      <div style={{ textAlign: "center", marginTop: "8px", fontSize: "12px", color: "#999" }}>
        <span>This is a demo site. No real downloads are provided.</span>
      </div>
    </div>
  );
}
