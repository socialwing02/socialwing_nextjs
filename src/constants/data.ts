import { StaticImageData } from "next/image";

export type NavItem = {
  name: string;
  path: string;
  children?: NavItem[];
};
export const navlist = [
  { name: "Home", path: "/" },
  {
    name: "Service",
    path: "/service",
    children: [
      { name: "Web Development", path: "/web-development" },
      { name: "Mobile App Development", path: "/app-development" },
      { name: "Graphic Designing", path: "/graphic-design" },
      { name: "Video-Editing", path: "/video-editing" },
    ],
  },
  {
    name: "About Us",
    path: "/about",
    children: [
      { name: "Our Story", path: "/our-story" },
      { name: "Events", path: "/events" },
    ],
  },
  { name: "Contact Us", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

import social from "@/assets/images/social.svg";
import app from "@/assets/images/mobile.svg";

export type CardContent = {
  title: string;
  content: string;
  id: number;
  img: StaticImageData;
};

export const serivceCardContent: CardContent[] = [
  {
    title: "Social Media Marketing",
    content:
      "Engage with us to elevate your enterprise through our spectrum of services, and explore the transformative potential of our cutting-edge products and trial offerings. ",
    id: 1,
    img: social,
  },
  {
    title: "Graphic Designing",
    content:
      "Engage with us to elevate your enterprise through our spectrum of services, and explore the transformative potential of our cutting-edge products and trial offerings. ",
    id: 2,
    img: app,
  },
  {
    title: "Ads Campaign",
    content:
      "Engage with us to elevate your enterprise through our spectrum of services, and explore the transformative potential of our cutting-edge products and trial offerings. ",
    id: 3,
    img: app,
  },
  {
    title: "Video Editing",
    content:
      "Engage with us to elevate your enterprise through our spectrum of services, and explore the transformative potential of our cutting-edge products and trial offerings. ",
    id: 4,
    img: app,
  },
  {
    title: "Mobile App Develpment",
    content:
      "Engage with us to elevate your enterprise through our spectrum of services, and explore the transformative potential of our cutting-edge products and trial offerings. ",
    id: 5,
    img: app,
  },
  {
    title: "Web Development",
    content:
      "Engage with us to elevate your enterprise through our spectrum of services, and explore the transformative potential of our cutting-edge products and trial offerings. ",
    id: 6,
    img: social,
  },
];

import inital from "@/assets/images/initial.webp";
import graphic from "@/assets/images/graphic-design1.jpg";
import mobile from "@/assets/images/mobile.svg";
import socialImg from "@/assets/images/social-media.webp";
import web from "@/assets/images/web.svg";

export const marqueeImaages = [
  inital,
  graphic,
  mobile,
  socialImg,
  web,
  graphic,
];

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { SvgIconTypeMap } from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";

export type WebCardType = {
  title: string;
  content: string;
  id: number;
  icon: OverridableComponent<SvgIconTypeMap>;
};

export const webCardContent: WebCardType[] = [
  {
    id: 1,
    title: "Planning",
    icon: ShoppingCartCheckoutIcon,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt cumque dolore rerum quidem voluptatibus cum? Facere doloremque repudiandae alias ab eaque qui sapiente nam, laborum maiores, numquam est libero.",
  },
  {
    id: 2,
    title: "Designing",
    icon: IntegrationInstructionsIcon,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt cumque dolore rerum quidem voluptatibus cum? Facere doloremque repudiandae alias ab eaque qui sapiente nam, laborum maiores, numquam est libero.",
  },
  {
    id: 3,
    title: "Develpoment",
    icon: AdsClickIcon,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt cumque dolore rerum quidem voluptatibus cum? Facere doloremque repudiandae alias ab eaque qui sapiente nam, laborum maiores, numquam est libero.",
  },
  {
    id: 4,
    title: "Testing",
    icon: AdsClickIcon,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt cumque dolore rerum quidem voluptatibus cum? Facere doloremque repudiandae alias ab eaque qui sapiente nam, laborum maiores, numquam est libero.",
  },
  {
    id: 5,
    title: "Deployment",
    icon: AdsClickIcon,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt cumque dolore rerum quidem voluptatibus cum? Facere doloremque repudiandae alias ab eaque qui sapiente nam, laborum maiores, numquam est libero.",
  },
  {
    id: 6,
    title: "Monitoring",
    icon: AdsClickIcon,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt cumque dolore rerum quidem voluptatibus cum? Facere doloremque repudiandae alias ab eaque qui sapiente nam, laborum maiores, numquam est libero.",
  },
];
