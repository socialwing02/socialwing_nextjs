import React from "react";
import icon1 from "@/assets/images/appdevelopement/0c893ec8467f30315337c5a2b320c010.jpg";
import icon2 from "@/assets/images/appdevelopement/81463cce235952ec80ca65677a0f5ff2.jpg";
import icon3 from "@/assets/images/appdevelopement/f153deee321823100bdf5e53bced74dd.jpg";
import Image from "next/image";

export default function Scrol() {
  return (
    <div className="bg-[#67309c] min-h-screen flex flex-col items-start justify-start py-10 px-6">
      {/* Mobile App Development Card */}
      <div className="w-full md:w-1/2 bg-gray-100 p-6 mb-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Mobile App Development
        </h3>
        <p className="text-gray-700 mb-4">
          Android dominates the smartphone market with its open-source
          flexibility and wide user base. Our native app development service
          focuses on creating applications specifically for Android devices,
          ensuring optimal performance and compatibility. We leverage the latest
          Android technologies to deliver apps that offer:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>Seamless User Experience:</strong> Intuitive interfaces that
            resonate with users.
          </li>
          <li>
            <strong>High Performance:</strong> Smooth, fast, and responsive
            applications.
          </li>
          <li>
            <strong>Enhanced Security:</strong> Robust security measures to
            protect sensitive data.
          </li>
          <li>
            <strong>Google Play Integration:</strong> Complete integration with
            Google’s ecosystem for easy app distribution and updates.
          </li>
        </ul>
      </div>

      {/* iOS App Development Card */}
      <div className="w-full md:w-1/2 bg-gray-100 p-6 mb-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          iOS App Development
        </h3>
        <p className="text-gray-700 mb-4">
          iOS is the hallmark of premium quality and advanced technology. Our
          iOS app development is dedicated to producing applications that embody
          the sophistication of Apple’s platform. We focus on:
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
            <strong>Performance Optimization:</strong> Leveraging iOS’s powerful
            hardware for fluid and efficient apps.
          </li>
          <li>
            <strong>App Store Compliance:</strong> Ensuring all applications
            meet Apple’s stringent guidelines for App Store submission.
          </li>
        </ul>
      </div>

      {/* React Native App Development Card */}
      <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
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
  );
}
