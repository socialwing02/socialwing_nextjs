import React from "react";
import Image from "next/image";
import image1 from "@/assets/images/appdevelopement/About.png";
import image2 from "@/assets/images/appdevelopement/DALL·E 2024-12-09 14.44.21 - A visually captivating digital marketing illustration featuring a smartphone and laptop surrounded by social media icons, graphs, and charts. The back.webp";
import image3 from "@/assets/images/appdevelopement/Dream_language_hero.png";

const ScrollPage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="fixed w-1/3 bg-gray-200 p-4 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Fixed Side</h2>
      </div>
      <div className="w-2/3 ml-auto p-4 overflow-y-auto h-full">
        <div className="space-y-4">
          <Image
            src={image1}
            alt="Image 1"
            className="w-full h-auto mb-4 rounded"
            width={300}
            height={999}
          />
          <Image
            src={image2}
            alt="Image 2"
            className="w-full h-auto mb-4 rounded"
          />
          <Image
            src={image3}
            alt="Image 3"
            className="w-full h-auto mb-4 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollPage;
