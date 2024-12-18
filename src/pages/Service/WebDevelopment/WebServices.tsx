import { webSectionContent } from "@/constants/data";
import Image from "next/image";
import React from "react";

export default function WebServices() {
  return (
    <section className="flex flex-col gap-16 items-center my-10">
      {webSectionContent.map((item) => (
        <div
          key={item.id}
          className="flex flex-col lg:flex-row justify-center items-center gap-8 px-3 w-full py-8"
        >
          <div
            className={`w-[min(600px,90vw)] ${
              item.reverse ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <Image
              src={item.img}
              alt={item.title}
              className="rounded-lg object-cover"
              layout="responsive"
            />
          </div>

          <div
            className={`${
              item.reverse ? "lg:order-1" : "lg:order-2"
            } flex flex-col gap-3`}
          >
            <h2 className="text-[clamp(1.8rem,2.2vw,4rem)] pt-3">
              {item.title}
            </h2>
            <p className="w-[min(60ch,90vw)] text-[clamp(1.1rem,1vw,2rem)]">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
