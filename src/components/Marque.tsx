import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  animateClassName: string;
  images: StaticImageData[];
  logo?: boolean;
};

export default function Marquee({ animateClassName, images, logo }: Props) {
  return (
    <section className={animateClassName}>
      <div className="marquee">
        <ul className="marqueeContent">
          {images.map((image, index) => (
            <div key={index} className="marqueeItem">
              <Image
                src={image}
                alt={`${index}`}
                loading="lazy"
                style={{ width: logo ? "100px" : undefined }}
              />
            </div>
          ))}
        </ul>

        <ul className="marqueeContent">
          {images.map((image, index) => (
            <div key={index} className="marqueeItem">
              <Image
                src={image}
                alt={`${index}`}
                loading="lazy"
                style={{ width: logo ? "100px" : undefined }}
              />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
