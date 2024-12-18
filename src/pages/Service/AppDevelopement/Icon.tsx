import React from "react";
import Image from "next/image";
import icon from "@/assets/images/appdevelopement/Social Wing IOS.png";
import icon1 from "@/assets/images/appdevelopement/Social wing Android.png";
import icon2 from "@/assets/images/appdevelopement/Social wing React native.png";

export default function Icon() {
  return (
    <div className=" text-center   ">
      <div className=" flex flex-col justify-items-center w-[80%] mx-auto gap-[90] mt-[80px]">
        <h2 className="h-4  font-bold text-2xl">
          With increasing mobile connectivity, mobile applications add a new
          dimension to businesses from services to commerce and education to
          entertainment.
        </h2>
        <h2>
          Repute excels in building fully functional applications with an
          enhanced user experience which includes application design,
          integration and management services. We handle the entire mobile app
          development process from ideation, concept creation, delivery, and
          ongoing support.
        </h2>
      </div>
      <div className="flex justify-center space-x-60 mt-16">
        <div className="w-28">
          <Image
            src={icon}
            alt="Mobile App Development"
            className="rounded mt-6 w-full h-auto object-cover "
          />
          <p className="mt-2">iOS Development</p>
        </div>
        <div className="w-28">
          <Image
            src={icon1}
            alt="Mobile App Development"
            className="rounded mt-6 w-full h-auto object-cover"
          />
          <p className="mt-2">Android Development</p>
        </div>
        <div className="w-28">
          <Image
            src={icon2}
            alt="Mobile App Development"
            className="rounded mt-6 w-full h-auto object-cover"
          />
          <p className="mt-2">React Native Development</p>
        </div>
      </div>
    </div>
  );
}
