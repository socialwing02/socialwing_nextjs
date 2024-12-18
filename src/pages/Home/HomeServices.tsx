import React from "react";
import dynamic from "next/dynamic";

const CardList = dynamic(() => import("@/components/CardList"), {
  loading: () => <p>Loading...</p>,
});

export default function HomeServices() {
  return (
    <section className="p-6">
      <header className="flex flex-col items-center">
        <h3 className="text-[clamp(1.5rem,2.2vw,3rem)]">What we do</h3>
        <h1 className="text-[clamp(2rem,2.5vw,4rem)] pb-12">
          Innovative Solutions for Digital Excellence
        </h1>
      </header>

      <CardList />
    </section>
  );
}
