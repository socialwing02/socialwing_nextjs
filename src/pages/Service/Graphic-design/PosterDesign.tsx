"use client";

import { marqueeImaages } from "@/constants/data"; // Assuming marqueeImaages is an array of image paths
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function PosterDesign() {
  const [count, setCount] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const image = marqueeImaages[count];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCount((prev) => (prev + 1) % marqueeImaages.length);
      }, 500);

      setTimeout(() => {
        setIsChanging(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center my-[3rem] gap-16">
      <div className="w-[600px] h-[500px] relative overflow-hidden">
        <Image
          src={image}
          alt="Poster Design"
          className={`transition-opacity duration-100 ${
            isChanging ? "opacity-0" : "opacity-100"
          }`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <article className="w-[min(500px,90vw)]">
        <h1>Poster Designs</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          quis ea consectetur reprehenderit corporis sed fugiat, voluptas
          delectus est accusantium, vitae iusto soluta suscipit adipisci
          quibusdam vero ipsam voluptates quaerat.
        </p>
      </article>
    </div>
  );
}
