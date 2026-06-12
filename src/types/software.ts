// Software version entry in a download list
export interface PanLink {
  pan: "baidu" | "quark" | "123" | "unknown";
  code: string;
  key?: string; // 百度网盘的提取码 pwd 参数
}

export interface SoftwareVersion {
  name: string;
  link?: string;
  links?: PanLink[];
  shixiao?: string; // "链接失效或整理中" or "true"
}

// Software category entry (e.g., "Photoshop", "After Effects")
export interface SoftwareCategory {
  name: string;
  description?: string;
  icon?: string;
  versions: SoftwareVersion[];
}

// Menu category (sidebar tab)
export interface MenuCategory {
  id: string;
  name: string;
}

// Section wrapper props
export interface SoftwareSectionProps {
  categories: SoftwareCategory[];
}

// Panel data from extracted source
export interface PanelData {
  panelId: string;
  panelName: string;
  categories: SoftwareCategory[];
}
