"use client";

import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="search" style={{ margin: "20px 15%", fontSize: "14px", color: "#707070" }}>
      <div className="search-box" style={{ position: "relative", width: "100%" }}>
        <input
          type="text"
          autoComplete="off"
          placeholder="专业软件搜索"
          className="search-input"
          id="search-input"
          style={searchInputStyle}
        />
        <span className="search-icon" style={searchIconStyle}>
          <Image
            src="/assets/img/search.svg"
            alt="search"
            width={16}
            height={16}
            style={{ height: "100%" }}
          />
        </span>
      </div>
    </div>
  );
}

const searchInputStyle: React.CSSProperties = {
  WebkitAppearance: "none",
  backgroundColor: "#fff",
  backgroundImage: "none",
  borderRadius: "4px",
  border: "1px solid #dcdfe6",
  boxSizing: "border-box",
  color: "#606266",
  display: "inline-block",
  height: "40px",
  lineHeight: "40px",
  outline: "0",
  padding: "0 35px",
  transition: "border-color .2s cubic-bezier(.645,.045,.355,1)",
  width: "100%",
  fontSize: "inherit",
};

const searchIconStyle: React.CSSProperties = {
  height: "16px",
  top: "12px",
  left: "12px",
  position: "absolute",
  textAlign: "center",
};
