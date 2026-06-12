"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SearchBar from "@/components/SearchBar";
import MenuSidebar from "@/components/MenuSidebar";
import SoftwareAccordion from "@/components/SoftwareAccordion";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0); // First menu item is active by default

  return (
    <div className="container flex-y" style={{ minHeight: "100%", position: "relative", width: "1000px", margin: "0 auto" }}>
      {/* Header */}
      <SiteHeader />

      {/* Main Content */}
      <div className="main" style={{ flex: 1, background: "#fff", borderRadius: "6px" }}>
        {/* Search */}
        <SearchBar />

        {/* Content Area: Menu + Software List */}
        <div className="content" style={{ overflow: "hidden", width: "100%" }}>
          {/* Menu Sidebar */}
          <MenuSidebar activeIndex={activeMenuIndex} onActivate={setActiveMenuIndex} />

          {/* Software Accordion Panel */}
          <SoftwareAccordion panelIndex={activeMenuIndex} />
        </div>
      </div>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
