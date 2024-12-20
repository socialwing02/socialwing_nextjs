import Image from "next/image";
import React from "react";

import icon1 from "@/assets/images/appdevelopement/0c893ec8467f30315337c5a2b320c010.jpg";

export default function ScrollCard() {
  return (
    <div className="w-full min-h-screen flex items-center sticky top-0">
      <Image src={icon1} alt="image" className="w-[400px] rounded-lg" />
    </div>
  );
}

export function Mobile() {
  return (
    <>
      <ScrollCard />
    </>
  );
}
