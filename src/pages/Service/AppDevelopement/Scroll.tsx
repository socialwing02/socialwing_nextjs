"use client";

import React, { useRef } from "react";
// import icon2 from "@/assets/images/appdevelopement/81463cce235952ec80ca65677a0f5ff2.jpg";
// import icon3 from "@/assets/images/appdevelopement/f153deee321823100bdf5e53bced74dd.jpg";
import Image from "next/image";
import { useInView } from "framer-motion";
import ScrollCard from "./scrollText/ScrollCard";
// import Button from "@/components/ui/Button";

export default function Scroll() {
  return (
    <div className=" bg-black w-full flex  items-start gap-10  py-10 px-6 ">
      <div className="w-full py-[50vh]">
        <Card />
        <Card />
        <Card />
      </div>

      <ScrollCard />
    </div>
  );
}

function Card() {
  const ref = useRef<HTMLDivElement>(null);

  const isView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  console.log(isView);

  return (
    <>
      <div ref={ref} className=" my-[10rem] p-6 rounded-lg shadow-lg w-[700px]">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Mobile App Development
        </h3>
        <p
          className="text-gray-700 mb-4 transition-colors"
          style={{ color: isView ? "white" : "" }}
        >
          Android dominates the smartphone market with its open-source
          flexibility and wide user base. Our native app development service
          focuses on creating applications specifically for Android devices,
          ensuring optimal performance and compatibility. We leverage the latest
          Android technologies to deliver apps that offer:
        </p>
      </div>
    </>
  );
}

{
  /*   <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            iOS App Development
          </h3>
          <p className="text-gray-700 mb-4">
            iOS is the hallmark of premium quality and advanced technology. Our
            iOS app development is dedicated to producing applications that
            embody the sophistication of Apple’s platform. We focus on:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Elegant Design:</strong> Aesthetic and functional designs
              that align with Apple’s standards.
            </li>
            <li>
              <strong>User-Centric Approach:</strong> Apps that cater to the
              specific needs and preferences of iOS users.
            </li>
            <li>
              <strong>Performance Optimization:</strong> Leveraging iOS’s
              powerful hardware for fluid and efficient apps.
            </li>
            <li>
              <strong>App Store Compliance:</strong> Ensuring all applications
              meet Apple’s stringent guidelines for App Store submission.
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            React Native App Development
          </h3>
          <p className="text-gray-700 mb-4">
            React Native is a popular framework for building cross-platform
            applications. Our React Native app development service offers:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Versatility:</strong> Develop for both Android and iOS
              platforms simultaneously.
            </li>
            <li>
              <strong>Rich UI:</strong> Highly customizable widgets to create
              visually stunning apps.
            </li>
            <li>
              <strong>Faster Time-to-Market:</strong> Quicker development cycles
              thanks to a single codebase.
            </li>
            <li>
              <strong>Google Play and App Store Integration:</strong> Seamless
              integration with both platforms for easy app distribution and
              updates.
            </li>
          </ul>
        </div>
      </div>
 */
}
