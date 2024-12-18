import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import QuickLinks from "./QuickLinks";
import { navlist } from "@/constants/data";

export default function Footer() {
  const navServiceChildren = navlist.find(
    (item) => item.name === "Service"
  )?.children;

  const aboutChildren = navlist.find(
    (item) => item.path === "/about"
  )?.children;

  return (
    <footer className="gap-[6rem] border-t-2 flex justify-around p-14 ">
      <QuickLinks title="Quick Links" links={navlist} />
      <QuickLinks title="Services" links={navServiceChildren} />
      <QuickLinks title="About us" links={aboutChildren} />

      <div>
        <h3 className="text-[clamp(1rem,1.4vw,3rem)]">Contact us</h3>

        <div className="w-[330px]">
          <h1 className="text-[clamp(1.5rem,1.8vw,4rem)]">978976557</h1>
          <div className="grid gap-1">
            <p>
              <a href="mailto:ajitdhas@gmail.com">socialwing@gmail.com</a>
            </p>
            <p>Social Wing</p>
            <p>kandanvila main road, kandanvilai</p>
            <p>Tamil nadu 629810</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// <WhatsAppIcon />
//       <FacebookIcon />
//       <InstagramIcon />
//       <YouTubeIcon />
//       <LinkedInIcon />
//       <XIcon />
