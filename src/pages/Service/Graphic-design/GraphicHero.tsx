import Image from "next/image";
import React from "react";
import hero from "@/assets/images/graphic-design/graphic-hero.jpg";
import Button from "@/components/ui/Button";

export default function GraphicHero() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Graphic Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="absolute inset-0 m-auto z-10 w-[80%] flex flex-col gap-5 justify-center items-center text-white">
        <h1 className="text-[clamp(2rem,3vw,4rem)]">Graphic Designing</h1>
        <p className="text-[clamp(1.5rem,2vw,3rem)]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          tempore maiores labore totam dolorum, exercitationem provident vitae
          debitis voluptatum, odit velit cumque quisquam voluptatem ducimus hic
          voluptate facilis consequatur a.
        </p>

        <Button>Enquiry Now</Button>
      </div>
    </section>
  );
}
