import { Heart } from "lucide-react";
import React from "react";

export const RecentSupporters = () => {
  return (
    <div className="w-full flex flex-col gap-6 border border-[#E4E4E7] rounded-lg p-6">
      <p className="inter font-[600] text-[16px] text-[#18181B]">
        Recent Supporters
      </p>
      <div className="min-h-[140px] border border-[#E4E4E7] rounded-lg flex flex-col justify-center items-center gap-4">
        <Heart fill="black" />
        <p className="inter font-[600] text-[16px] text-[#18181B]">
          Be the first one to support Jake
        </p>
      </div>
    </div>
  );
};
