import React from "react";

type Props = {
  label: string;
  name: string;
};

export default function Checkbox({ label, name }: Props) {
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        name={name}
        id=""
        className="rounded-full bg-gray-700"
      />
      <label className="text-sm text-nowrap" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
