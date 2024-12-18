import React from "react";
import appdevelopemnt from "@/assets/images/appdevelopement/socialwing_app_developement.png";
import Image from "next/image";

export default function AppDevelopment() {
  return (
    <div className="flex justify-end mt-3  ">
      <div className="w-[500px]  rounded">
        <Image src={appdevelopemnt} alt="" />
      </div>
    </div>
  );
}
