import React from "react";

export const CreatorInfo = () => {
  return (
    <div className="w-[632px] h-fit flex flex-col">
      <div className="w-full flex flex-col gap-3 border border-[#E4E4E7] rounded-lg p-6">
        <div className="w-full flex justify-between">
          <div className="w-fit flex gap-3 items-center justify-center">
            <img
              src="profile.jpg"
              alt="profile img"
              className="w-[48px] h-[48px] rounded-full"
            />
            <p className="inter text-[20px] font-[700] text-[#09090B]">Jake</p>
          </div>
        </div>
      </div>
    </div>
  );
};
