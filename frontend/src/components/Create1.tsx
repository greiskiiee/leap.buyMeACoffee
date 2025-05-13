import { Camera } from "lucide-react";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export const Create1 = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-start gap-6">
      <p className="inter font-[600] text-[24px] text-[#09090B]">
        Complete your profile page
      </p>

      <div className="flex flex-col gap-3">
        <p className="font-[500] text-[14px] text-[#09090B]">Add photo</p>
        <div className="w-[160px] h-[160px] border-2 border-[#E4E4E7] border-dashed rounded-full flex justify-center items-center">
          <Camera color="#18181B" strokeWidth={1.5} opacity={0.5} size={23} />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Label>Name</Label>
          <Input type="text" placeholder="Enter your name here" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>About</Label>
          <Input
            className="h-[131px] flex justify-start items-start placeholder-"
            type="text"
            placeholder="Write about yourself here"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Social media URL</Label>
          <Input type="text" placeholder="https://" />
        </div>
      </div>
    </div>
  );
};
