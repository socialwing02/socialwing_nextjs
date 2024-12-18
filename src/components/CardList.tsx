import { serivceCardContent } from "@/constants/data";
import Card from "./Card";

export default function CardList() {
  return (
    <div className=" grid place-content-center w-[calc(100vw-6rem)] mx-auto px-4">
      <div className=" grid gap-8 sm:grid-cols-[repeat(2,min(450px,90vw))]  ">
        {serivceCardContent.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
