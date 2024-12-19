import Image from "next/image";
import React from "react";
import bgImg from "@/assets/images/graphic-design/image1.jpg";

export default function GraphicEvalute() {
  return (
    <div className="my-10 flex justify-center gap-10">
      <div className="w-[600px]">
        <Image src={bgImg} alt="evalute img" className="rounded-lg" />
      </div>

      <article className="w-[min(500px,90vw)] flex flex-col gap-4">
        <h1 className="text-[clamp(1.5rem,2vw,4rem)]">
          What we do in Graphic Design ?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          impedit odit aperiam iusto obcaecati cum. Quaerat veniam, nobis
          veritatis perferendis amet, sequi blanditiis maiores quam quidem
          corrupt i, alias impedit beatae?
        </p>

        <ul className="ml-[4rem] grid gap-2">
          <li className="list-disc text-2xl">Poster Design</li>
          <li className="list-disc text-2xl">Logo Design</li>
          <li className="list-disc text-2xl">Typography Design</li>
          <li className="list-disc text-2xl">Advertising Design</li>
        </ul>
      </article>
    </div>
  );
}
