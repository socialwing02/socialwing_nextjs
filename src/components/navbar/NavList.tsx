"use client";

import { NavItem } from "@/constants/data";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

type Props = {
  item: NavItem;
};

export default function NavList({ item }: Props) {
  const [IsDropped, setIsDropped] = useState<boolean>(false);

  function handleMouseEnter() {
    setIsDropped(true);
  }

  function handleMouseLeave() {
    setIsDropped(false);
  }

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={item.path} className="hover:text-violet-600">
        {item.name}
      </Link>
      {item.children && (
        <Dropdown key={item.name} item={item} isDropped={IsDropped} />
      )}
    </li>
  );
}
