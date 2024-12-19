import React from "react";
import appdevelopemnt from "@/assets/images/appdevelopement/socialwing_app_developement.png";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AppHero() {
  return (
    <div className="flex justify-around r gap-4 items-center leading-7">
      <div className=" p-4">
        <h1 className="mt-4 font-bold text-4xl">
          Your Gateway to the Digital World
        </h1>
        <p className="w-[min(80ch,90vw)] p-10">
          In an era where the digital landscape is constantly evolving, mobile
          applications are pivotal for business innovation and customer
          engagement. Our agency is at the forefront of this revolution,
          offering comprehensive mobile application development services that
          turn your ideas into reality. We understand the importance of a mobile
          presence and are dedicated to delivering applications that exceed user
          expectations. Choose us as your mobile app development partner and
          let&apos;s create a mobile experience that captivates your users and
          drives your success.
        </p>
        <div className="mt-4 justify-self-end pr-[8rem] ">
          <Button>GET PROPOSAL</Button>
        </div>
      </div>
      <div className="w-[500px] rounded mt-6 flex justify-start h-auto">
        <Image
          src={appdevelopemnt}
          alt="Mobile App Development"
          className="rounded mt-6"
        />
      </div>
    </div>
  );
}
