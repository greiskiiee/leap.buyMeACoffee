import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

type InputCompTypes = {
  labelName: string;
  inputType: string;
};

export const InputComp = ({ labelName, inputType }: InputCompTypes) => {
  return (
    <div className="w-full h-fit flex flex-col gap-[16px] items-start">
      <Label htmlFor={inputType}>{labelName}</Label>
      <Input type={inputType} placeholder={labelName} />
    </div>
  );
};
