import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  path: string;
};

export default function NavList({ item }: { item: Props }) {
  return (
    <li>
      <Link href={item.path}>{item.name}</Link>
    </li>
  );
}
