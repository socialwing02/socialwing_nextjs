import React from "react";
import Button from "../ui/Button";
import Nav from "./Navbar/Nav";
import HamburgMenu from "./HamburgMenu";

export default function MainHeader() {
  return (
    <header className="bg-white  flex justify-between  items-center py-6 relative px-8  shadow-sm">
      logo
      <div className="lg:flex gap-[6rem] items-center hidden pr-14  ">
        <Nav />
        <Button>Let&apos;s connect</Button>
      </div>
      <HamburgMenu />
    </header>
  );
}
