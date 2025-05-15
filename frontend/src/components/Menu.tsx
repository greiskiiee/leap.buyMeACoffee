import React from "react";
import { Button } from "./ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

export const Menu = () => {
  return (
    <div className="w-[251px] h-fit flex flex-col gap-1">
      <Button className="w-[250px] px-4 py-2 hover:bg-[#F4F4F5] flex justify-start gap-2 bg-transparent text-[#18181B] shadow-none">
        Home
      </Button>
      <Button className="w-[250px] px-4 py-2 hover:bg-[#F4F4F5] flex justify-start gap-2 bg-transparent text-[#18181B] shadow-none">
        Explore
      </Button>
      <Button className="w-[250px] px-4 py-2 hover:bg-[#F4F4F5] has-[>svg]:px-4 flex justify-start gap-2 bg-transparent text-[#18181B] shadow-none">
        View page
        <SquareArrowOutUpRight />
      </Button>
      <Button className="w-[250px] px-4 py-2 hover:bg-[#F4F4F5] flex justify-start gap-2 bg-transparent text-[#18181B] shadow-none">
        Account settings
      </Button>
    </div>
  );
};
