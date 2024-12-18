import { navlist, NavlistType } from "@/constants/data";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  links: NavlistType[] | undefined;
};

export default function QuickLinks({ title, links }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[clamp(1.6rem,1.8vw,4rem)]">{title}</h2>

      <ul className="grid gap-2 ">
        {links?.map((item) => {
          if (item.name === "Service") return;

          return (
            <li key={item.name} className="hover:underline text-base">
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
