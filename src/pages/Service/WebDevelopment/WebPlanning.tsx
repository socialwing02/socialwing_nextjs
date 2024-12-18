import { webCardContent } from "@/constants/data";
import { WebCardType } from "@/constants/types";
import React from "react";

export default function WebPlanning() {
  return (
    <div className="w-[min(90vw,calc(100vw-4rem))] flex flex-wrap justify-center items-center gap-6 mx-auto py-4">
      {webCardContent.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

function Card({ item }: { item: WebCardType }) {
  return (
    <div className="bg-white rounded-lg h-[300px] shadow-md border-2 flex flex-col gap-2  p-6">
      <item.icon fontSize="large" className="text-violet-700" />

      <div>
        <h2 className="text-[clamp(1.5rem,1.8vw,4rem)]">{item.title}</h2>
        <p className="w-[35ch]">{item.content}</p>
      </div>
    </div>
  );
}
