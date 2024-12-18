import { navlist, NavlistType } from "@/constants/data";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  links: NavlistType[];
};

export default function QuickLinks({ title, links }: Props) {
  return (
    <div>
      <ul>
        {links.map((item) => (
          <li key={item.name}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
