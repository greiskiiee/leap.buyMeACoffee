import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const CreatorInfo = () => {
  return (
    <div className="w-[632px] h-fit flex flex-col">
      <div className="w-full flex flex-col gap-5 border border-[#E4E4E7] rounded-lg p-6">
        <div className="w-full flex justify-between items-center">
          <div className="w-fit flex gap-3 items-center justify-center">
            <img
              src="profile.jpg"
              alt="profile img"
              className="w-[48px] h-[48px] rounded-full"
            />
            <p className="inter text-[20px] font-[700] text-[#09090B]">Jake</p>
          </div>
          <Button className="bg-[#F4F4F5] text-[#18181B] inter text-[14px] font-[500]">
            Edit page
          </Button>
        </div>

        <div className="h-fit py-4 justify-center items-center flex">
          <Separator />
        </div>

        <div className="flex flex-col gap-3">
          <p className="inter font-[600] text-[16px] text-[#18181B]">
            About Jake
          </p>
          <p className="inter font-[400] text-[14px] text-[#18181B]">
            I’m a typical person who enjoys exploring different things. I also
            make music art as a hobby. Follow me along.
          </p>
        </div>
      </div>
    </div>
  );
};
