import social from "@/assets/images/social.svg";
import app from "@/assets/images/mobile.svg";

import inital from "@/assets/images/initial.webp";
import graphic from "@/assets/images/graphic-design1.jpg";
import mobile from "@/assets/images/mobile.svg";
import socialImg from "@/assets/images/social-media.webp";
import web from "@/assets/images/web.svg";

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AdsClickIcon from "@mui/icons-material/AdsClick";

import e_commerce from "@/assets/images/web-development/e-commerce.png";
import responsive from "@/assets/images/web-development/responsive.jpg";
import tailor_made from "@/assets/images/web-development/tailor-made.jpg";
import portfolio from "@/assets/images/web-development/portfolio1.jpg";
import seo from "@/assets/images/web-development/seo.jpg";

import { CardContent, WebCardType, WebSectionType } from "./types";

export type NavlistType = {
  name: string;
  path: string;
  children?: NavlistType[];
};
export const navlist: NavlistType[] = [
  { name: "Home", path: "/" },
  {
    name: "Service",
    path: "/service",
    children: [
      { name: "Web Development", path: "/web-development" },
      { name: "Mobile App Development", path: "/app-development" },
      { name: "Graphic Designing", path: "/graphic-design" },
      { name: "Video-Editing", path: "/video-editing" },
      { name: "Social Media Marketing", path: "/video-editing" },
      { name: "Ads Campaign", path: "/video-editing" },
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

export const marqueeImaages = [
  inital,
  graphic,
  mobile,
  socialImg,
  web,
  graphic,
];

export const webCardContent: WebCardType[] = [
  {
    id: 1,
    title: "Planning",
    icon: ShoppingCartCheckoutIcon,
    content:
      "As a web agency, we understand client goals and target audience, create content strategies, design user-friendly layouts, and choose the right tech. We focus on SEO, testing, and post-launch support for optimal performance.",
  },
  {
    id: 2,
    title: "Designing",
    icon: IntegrationInstructionsIcon,
    content:
      "We build visually stunning, user-friendly websites, focusing on design elements that reflect your brand. Our responsive, accessible designs enhance user engagement and are aligned with your business goals.",
  },
  {
    id: 3,
    title: "Develpoment",
    icon: AdsClickIcon,
    content:
      "We develop fast, secure, and scalable websites using the latest technologies. Our clean code ensures seamless performance, SEO optimization, and security. With ongoing support, we help your website grow with your business.",
  },
  {
    id: 4,
    title: "Testing",
    icon: AdsClickIcon,
    content:
      "We conduct thorough testing to ensure your website functions flawlessly across devices and browsers. This includes performance checks, security testing, and user experience assessments for a seamless, bug-free launch.",
  },
  {
    id: 5,
    title: "Deployment",
    icon: AdsClickIcon,
    content:
      "We develop fast, secure, and scalable websites using the latest technologies. Our clean, efficient code ensures seamless functionality, prioritizing security and offering ongoing support to meet your growing business needs.",
  },
  {
    id: 6,
    title: "Monitoring",
    icon: AdsClickIcon,
    content:
      "Continuous monitoring ensures your website is secure, fast, and reliable. We track performance and user behavior, optimizing content and addressing issues before they affect performance, allowing you to grow your business.",
  },
];

export const webSectionContent: WebSectionType[] = [
  {
    id: 1,
    title: "E-commerce Solutions",
    content:
      "Empower your business with cutting-edge e-commerce platforms. We create secure, scalable, and user-friendly online stores tailored to your business needs. From streamlined checkout processes to advanced analytics, we ensure a seamless shopping experience for your customers and a growth-driven tool for your business.",
    img: e_commerce,
  },
  {
    id: 2,
    title: "Tailor-Made Web Development",
    content:
      "Every business is unique, and so should be its digital presence. Our tailor-made solutions reflect your brand's identity and meet your specific needs. From conceptualization to launch, we deliver designs that inspire and functionality that delivers results. Elevate your online presence with a website built just for you.",
    img: tailor_made,
    reverse: true,
  },
  {
    id: 3,
    title: "Engaging & Responsive Web Designs",
    content:
      "Your website should look amazing on every screen. Our responsive web designs adapt seamlessly to any device, providing a flawless user experience. Enhance engagement with intuitive navigation, eye-catching visuals, and fast load times that captivate your audience and drive conversions.",
    img: responsive,
  },
  {
    id: 4,
    title: "Portfolio Websites",
    content:
      "Showcase your work and leave a lasting impression with a professionally designed portfolio. We create visually appealing websites that highlight your expertise and achievements. Let your portfolio speak volumes about your skills, with layouts that are as dynamic and innovative as you are.",
    img: portfolio,
    reverse: true,
  },
  {
    id: 5,
    title: "SEO",
    content:
      "Showcase your work and leave a lasting impression with a professionally designed portfolio. We create visually appealing websites that highlight your expertise and achievements. Let your portfolio speak volumes about your skills, with layouts that are as dynamic and innovative as you are.",
    img: seo,
  },
];

import poster1 from "@/assets/images/posters/poster1.png";
import poster2 from "@/assets/images/posters/poster2.png";
import poster3 from "@/assets/images/posters/poster3.png";
import poster4 from "@/assets/images/posters/poster4.png";
import poster5 from "@/assets/images/posters/poster5.png";
import poster6 from "@/assets/images/posters/poster6.png";
import poster8 from "@/assets/images/posters/poster8.png";
import poster9 from "@/assets/images/posters/poster9.png";
import poster10 from "@/assets/images/posters/poster10.png";
import poster11 from "@/assets/images/posters/poster11.png";
import poster13 from "@/assets/images/posters/poster13.png";
import poster14 from "@/assets/images/posters/poster14.png";
import poster15 from "@/assets/images/posters/poster15.png";

export const graphic_poster = [
  poster1,
  poster2,
  poster3,
  poster4,
  poster5,
  poster6,
  poster8,
  poster9,
  poster10,
  poster11,
  poster13,
  poster14,
  poster15,
];

export const appScrollData = [
  {
    text: "App Development",
    card: "",
  },
];
