import { ChevronDown, Coffee } from "lucide-react";
import React from "react";

export const Navigation = () => {
  return (
    <div className="h-fit flex w-full px-24 py-2 justify-between items-center absolute top-[0px] left-[0px]">
      <div className="flex justify-center items-center gap-2 ">
        <Coffee color="#09090B" size={16} strokeWidth={3} />
        <p className="text-[#09090B] font-[700] text-[16px] inter">
          Buy Me Coffee
        </p>
      </div>
      <div className="w-[168px] flex justify-center items-center gap-4 ">
        <div className="w-[40px] h-[40px] flex justify-center items-center">
          <img
            src="profile.jpg"
            alt="profile img"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <p className="w-fit inter font-[500] text-[14px] text-[#09090B] min-w-[83px]">
          username
        </p>
        <ChevronDown color="#09090B" size={16} />
      </div>
    </div>
  );
};
