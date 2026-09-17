import { LayoutPanelLeft, Fuel, LucideIcon } from "lucide-react";

export interface SideBarMenuItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const SIDEBAR_MENU_ITEMS: SideBarMenuItem[] = [
  {
    label: "Beranda",
    href: "/e-cerapan",
    icon: LayoutPanelLeft,
  },
  {
    label: "Pemeriksaan Awal",
    href: "/e-cerapan/pemeriksaanawal",
    icon: Fuel,
  },
  {
    label: "Hasil Pemeriksaan",
    href: "/e-cerapan/pemeriksaanawal/hasilpemeriksaanawal",
    icon: Fuel,
  },
  {
    label: "Pengujian",
    href: "/e-cerapan/pengujian",
    icon: Fuel,
  },
  {
    label: "Hasil Pengujian",
    href: "/e-cerapan/hasilpengujian",
    icon: Fuel,
  },
];
