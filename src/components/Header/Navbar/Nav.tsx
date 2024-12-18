import { navlist } from "@/constants/data";
import React from "react";
import NavList from "./NavList";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-10">
        {navlist.map((item) => (
          <NavList key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
}
