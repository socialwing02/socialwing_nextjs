import { CardContent } from "@/constants/types";
import EastIcon from "@mui/icons-material/East";
import React from "react";

type Props = {
  item: CardContent;
};

export default function Card({ item }: Props) {
  return (
    <div className="p-4  grid border  rounded-xl  shadow hover:outline  hover:outline-violet-700">
      <div className="flex justify-between items-center ">
        <h2 className="text-[clamp(1.2rem,1.2vw,3rem)] font-[600] text-violet-600">
          {item.title}
        </h2>
        <span>
          <EastIcon className="text-violet-700 cursor-pointer" />
        </span>
      </div>
      <p className="text-[clamp(1rem,1vw,3rem)] ">{item.content}</p>
    </div>
  );
}
