import Image from "next/image";
import React from "react";

import webImg from "@/assets/images/web-development.png";
import Button from "@/components/ui/Button";

export default function WebHero() {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-12 items-center lg:items-start  py-[2.4rem]">
      <div className="w-[min(800px,90vw)]">
        <Image src={webImg} alt="" />
      </div>

      <article className=" flex flex-col gap-4 w-[min(60ch,90vw)] lg:mt-[5rem]">
        <h1 className="text-[clamp(1.3rem,2.6vw,4rem)] text-pretty">
          Stunning Websites Designed to Captivate and Convert
        </h1>
        <p className="text-[clamp(1rem,1.3vw,3rem)] ">
          Your website is more than a digital space—it&apos;s a powerful tool
          for connection and growth. Let us design and develop a web solution
          that&apos;s fast, secure, and visually compelling, while aligning
          perfectly with your brand&apos;s goals.
        </p>

        <Button className="">Book Consulting</Button>
      </article>
    </section>
  );
}
