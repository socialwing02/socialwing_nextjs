import React from "react";
import hero_about from "@/assets/images/about/hero_about.jpg";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Heroabout() {
  return (
    <div className="flex flex-col items-center ">
      <div>
        <h1 className="mt-10">
          <span className="text-4xl font-mono">Social Media</span>{" "}
          <span className="text-red-500 text-4xl font-mono">Manage</span>
        </h1>
      </div>
      <div>
        <h3 className="w-[900px] mt-4">
          From our early days of developing custom software for small businesses
          to now working with global enterprises, our story is one of growth,
          innovation, and a relentless pursuit of excellence. We've faced
          challenges, celebrated milestones, and most importantly, we've stayed
          true to our core values of integrity, innovation, and customer
          success.
        </h3>
      </div>
      <div className="mt-10 mb-9">
        <Button>Start With Us</Button>
      </div>

      <div>
        <Image
          src={hero_about}
          alt="Mobile App Development"
          className="rounded mt-12 w-[800px]"
        />
      </div>
    </div>
  );
}
