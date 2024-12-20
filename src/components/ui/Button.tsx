import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: Props) {
  const defaultClass =
    "bg-black text-white py-2 px-2 rounded-lg hover:bg-gray-800 w-max";

  const mergedClass = className ? `${defaultClass} ${className}` : defaultClass;

  return (
    <div>
      <button className={mergedClass}>{children}</button>
    </div>
  );
}
