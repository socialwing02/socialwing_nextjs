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
      { name: "Video-editing", path: "/video-editing" },
    ],
  },
  { name: "About Us", path: "/about" },
  { name: "Career", path: "/career" },
  { name: "Contact Us", path: "/contact" },
  { name: "Blog", path: "/blog" },
];
