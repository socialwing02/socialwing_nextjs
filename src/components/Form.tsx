import React from "react";
import Input from "./ui/Input";
import Checkbox from "./ui/Checkbox";

export default function Form() {
  return (
    <form className="w-[min(600px,90vw)] h-[500px] border-2 p-6">
      <div className="grid grid-cols-2 gap-3">
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
        <h2>Select Subjects</h2>

        <div className="flex gap-4">
          <Checkbox label="Product enquiry" name="product" />
          <Checkbox label="Product enquiry" name="product" />
          <Checkbox label="Product enquiry" name="product" />
          <Checkbox label="Product enquiry" name="product" />
        </div>
      </div>

      <div>
        <h2>Message</h2>
        <textarea name="" id="" className="border-b-2 w-[400px]"></textarea>
      </div>
    </form>
  );
}
