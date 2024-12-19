import React from "react";

type Props = {
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
  label: string;
};

export default function Input({ label, ...props }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.name} className="text-sm">
        {label}
      </label>
      <input
        {...props}
        className="border-b-2 border-gray-400 w-[min(250px,90vw)]"
      />
    </div>
  );
}
