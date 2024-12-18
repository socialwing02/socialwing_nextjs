import { webCardContent, WebCardType } from "@/constants/data";
import React from "react";

export default function WebServices() {
  return (
    <div className="w-[min(90vw,calc(100vw-4rem))] grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-8 ">
      {webCardContent.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

function Card({ item }: { item: WebCardType }) {
  return (
    <div className="bg-white rounded-lg h-[280px] shadow-md border-2 flex flex-col gap-2  mt-[5rem] p-4">
      <item.icon fontSize="large" className="text-violet-700" />

      <div>
        <h2 className="text-[clamp(1.5rem,1.8vw,4rem)]">{item.title}</h2>
        <p className="w-[35ch]">{item.content}</p>
      </div>
    </div>
  );
}
