import Image from "next/image";
import React from "react";

import webImg from "@/assets/images/web-development.png";
import Button from "@/components/ui/Button";

export default function WebHero() {
  return (
    <section className="flex flex-col sm:flex-row-reverse justify-center gap-4 items-center p-6">
      <div>
        <Image src={webImg} alt="" />
      </div>

      <article className="grid gap-4">
        <h1 className="text-[clamp(2rem,2.5vw,4rem)] text-pretty">
          Designing for the Future, Developing with Precision
        </h1>
        <p className="text-[clamp(1rem,1.3vw,3rem)]">
          Your website is more than a digital space—it&apos;s a powerful tool
          for connection and growth. Let us design and develop a web solution
          that&apos;s fast, secure, and visually compelling, while aligning
          perfectly with your brand&apos;s goals.
        </p>

        <div className="sm:justify-self-end">
          <Button className="">Book Consulting</Button>
        </div>
      </article>
    </section>
  );
}
