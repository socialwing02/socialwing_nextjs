import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function FooterImage() {
  return (
    <div className=" text-red">
      <video
        src="/socialwing_footer.mp4"
        className="border-2"
        autoPlay
        controls
      >
        sw
      </video>

      <div className="flex justify-center sm:justify-start md:justify-end lg:justify-end 2xl:justify-end mt-[-120px] sm:mt-[-80px] md:mt-[-150px] lg:mt-[-180px] 2xl:mt-[-230px] p-1 text-white">
  <div>
    <h3 className="text-xl font-semibold mb-4 sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">Follow Us</h3>
    <ul className="flex space-x-4">
      <li>
        <WhatsAppIcon />
      </li>
      <li>
        <FacebookIcon />
      </li>
      <li>
        <InstagramIcon />
      </li>
      <li>
        <YouTubeIcon />
      </li>
      <li>
        <LinkedInIcon />
      </li>
    </ul>
  </div>
</div>


      <div className="p-4">
        <h3>Quick Links</h3>
        <ul className="space-y-2">
          <li>Home</li>
          <li>About Us</li>
          <li>Service</li>
          <li>Carrier</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="text-center sm:items-start md:items-start lg:items-start 2xl:items-start sm:text-center md:text-center lg:text-center 2xl:text-center custom-height pt-20 right-0 left-0">
        ©2025 Socialwing. All rights reserved
        <div className="space-x-4">
          <a href="/" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/" className="hover:underline">
            Accessibility
          </a>
        </div>
      </div>
    </div>
  );
}
