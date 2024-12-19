import Hero from "@/pages/Home/Hero";
import Heroabout from "@/pages/AboutUS/Ourstory/Heroabout";
import OurStory from "../../pages/AboutUS/Ourstory/OurStory";
import WhoWe from "@/pages/AboutUS/Ourstory/WhoWe";
import WhatWe from "@/pages/AboutUS/Ourstory/Whatwedo";
import React from "react";

export default function Home() {
  return (
    <div>
      <Heroabout />
      <OurStory />
      <WhoWe />
      <WhatWe />
    </div>
  );
}
