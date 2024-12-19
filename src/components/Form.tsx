import React from "react";
import Input from "./ui/Input";
import Checkbox from "./ui/Checkbox";

export default function Form() {
  return (
    <form className="w-[min(600px,90vw)] h-[500px]  p-6">
      <div className="grid grid-cols-2 gap-7">
        <Input
          type="text"
          label="First Name"
          placeholder="Enter your first name"
          name="firstName"
        />
        <Input
          type="text"
          label="Last Name"
          placeholder="Enter your Last name"
          name="lastName"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email name"
          name="email"
        />
        <Input
          type="number"
          label="Phone"
          placeholder="Enter your  number"
          name="phone"
        />
      </div>

      <div className="grid gap-3 my-6">
        <h2 className="font-semibold">Select Subjects</h2>

        <div className="flex gap-10">
          <Checkbox label="Product enquiry" name="product" />
          <Checkbox label="Job enquiry" name="product" />
          <Checkbox label="Business enquiry" name="product" />
        </div>
      </div>

      <div className="grid gap-6">
        <h2 className="font-semibold">Message</h2>
        <textarea
          name=""
          id=""
          rows={5}
          className="border-2 w-[400px]"
        ></textarea>
      </div>
    </form>
  );
}
