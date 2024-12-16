import { NavItem } from "@/constants/data";
import Link from "next/link";
import React from "react";

export default function Dropdown({
  item,
  isDropped,
}: {
  item: NavItem;
  isDropped: boolean;
}) {
  return (
    <div
      className={`absolute top-6 left-[-33] w-fit border rounded-lg text-nowrap p-4 shadow-md bg-white ${
        isDropped ? "block" : "hidden"
      }`}
    >
      <div className="grid gap-4">
        {item.children?.map((item) => (
          <div key={item.name} className="hover:text-violet-600">
            <Link href={item.path}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
