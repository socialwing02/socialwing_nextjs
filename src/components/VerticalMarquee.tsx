import { marqueeImaages } from "@/constants/data";
import Image from "next/image";
import React from "react";

export default function VerticalMarquee() {
  return (
    <section className="enableScroll border-2 ">
      <div className="relative flex gap-6 overflow-hidden">
        <ul className="flex flex-shrink-0 justify-around min-w-full">
          {marqueeImaages.map((item, index) => (
            <li
              key={index}
              className="flex aspect-[1] justify-center items-cente flex-[1]"
            >
              <Image
                src={item}
                alt={`image +${index}`}
                className="max-w-[200px] object-contain w-full"
              />
            </li>
          ))}
        </ul>

        <ul className="flex flex-shrink-0 justify-around min-w-full">
          {marqueeImaages.map((item, index) => (
            <li key={index} className="flex justify-center items-center">
              <Image
                src={item}
                alt={`image +${index}`}
                className="max-w-[200px] object-contain w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
