import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { StaticImageData } from "next/image";

export type NavItem = {
  name: string;
  path: string;
  children?: NavItem[];
};
export type CardContent = {
  title: string;
  content: string;
  id: number;
  img: StaticImageData;
};

export type WebCardType = {
  title: string;
  content: string;
  id: number;
  icon: OverridableComponent<SvgIconTypeMap>;
};

export type WebSectionType = {
  id: number;
  title: string;
  content: string;
  img: StaticImageData;
  reverse?: boolean;
};
