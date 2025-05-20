"use client";
import { Menu } from "@/components/Menu";
import { MyProfile } from "@/components/MyProfile";
import { ChevronDown, Coffee } from "lucide-react";
import React, { useState } from "react";

export default function MyAccount() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center absolute">
      <div className="flex w-full px-4 py-2 justify-between items-center">
        <div className="flex justify-center items-center gap-2 absolute top-[32px] left-[80px]">
          <Coffee color="#09090B" size={16} strokeWidth={3} />
          <p className="text-[#09090B] font-[700] text-[16px] inter">
            Buy Me Coffee
          </p>
        </div>
        <div className="w-[168px] flex justify-center items-center gap-4 absolute top-[32px] right-[80px]">
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

      <Menu />

      <div className="w-[650px] h-fit flex flex-col absolute top-[130px] left-[405px] gap-8 ">
        <p className="inter font-[600] text-[24px] text-[#09090B]">
          My Account
        </p>

        <MyProfile />
      </div>
    </div>
  );
}
