"use client";
import CreateProfile from "@/app/(auth)/createprofile/page";
import { CreatorInfo } from "@/components/CreatorInfo";
import { Menu } from "@/components/Menu";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Camera, ChevronDown, Coffee } from "lucide-react";
import React, { useState } from "react";

export default function DonationCreator() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center absolute">
      <Navigation />
      <div className="w-full h-fit flex flex-col absolute gap-8 bg-amber-200 top-[56px] left-0 ">
        <div className="w-full h-[320px] bg-[#F4F4F5] z-10 flex justify-center items-center absolute top-0 left-0">
          <Button>
            <Camera />
            <p className="inter font-[500] text-[14px]">Add a cover image</p>
          </Button>
        </div>

        <div className="absolute z-20 bg-[#Fff] top-[269px] left-[80px] rounded-lg">
          <CreatorInfo />
        </div>
      </div>
    </div>
  );
}
