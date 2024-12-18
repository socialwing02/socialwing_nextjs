import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: Props) {
  let defaultClass =
    "bg-black text-white py-2 px-2 rounded-lg hover:bg-gray-800 w-max";

  if (className) {
    defaultClass += className;
  }

  return (
    <div>
      <button className={defaultClass}>{children}</button>
    </div>
  );
}
