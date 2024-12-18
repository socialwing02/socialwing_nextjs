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
  return (
    <footer className="min-h-[50vh] border-t-2">
      <QuickLinks title="Quick Links" links={navlist} />

      <div></div>
    </footer>
  );
}

// <WhatsAppIcon />
//       <FacebookIcon />
//       <InstagramIcon />
//       <YouTubeIcon />
//       <LinkedInIcon />
//       <XIcon />
