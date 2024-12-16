import { navlist } from "@/constants/data";
import React from "react";
import NavList from "./NavList";
export default function Navbar() {
  return (
    <nav className="bg-white flex justify-between items-center py-6 sticky top-0 px-6  shadow-sm">
      logo
      <div className="flex gap-[6rem]  pr-14">
        <ul className="flex gap-10">
          {navlist.map((item) => (
            <NavList key={item.name} item={item} />
          ))}
        </ul>
        {/* Button */}
        <div>
          <button>lets talk</button>
        </div>
      </div>
    </nav>
  );
}
