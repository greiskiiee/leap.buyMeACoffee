import { InputComp } from "@/components/InputComp";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import Image from "next/image";

export default function Signup() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-amber-400 relative">
        {/* logo */}
        <div className="flex justify-center items-center gap-2 absolute top-[32px] left-[80px]">
          <Coffee color="#09090B" size={16} strokeWidth={3} />
          <p className="text-[#09090B] font-[700] text-[16px] inter">
            Buy Me Coffee
          </p>
        </div>
        {/* illustration */}
        <div className="w-fit h-fit flex flex-col justify-center items-center gap-[40px]">
          <img src="illustration.png" alt="illustration" className="" />
          <div className="w-[455px] flex flex-col gap-[12px] justify-center items-center">
            <p className="jakarta text-[24px] font-[700]">
              Fund your creative work
            </p>
            <p className="manrope text-[16px] font-[400] text-center">
              Accept support. Start a membership. Setup a shop. It’s easier than
              you think.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center relative ">
        <div className="flex justify-center items-center gap-2 absolute top-[32px] right-[80px]">
          <Button className="bg-[#F4F4F5] text-[#18181B] inter text-[14px] font-[500]">
            Login
          </Button>
        </div>
        {/* illustration */}
        <div className="w-fit h-fit flex flex-col justify-center items-center gap-[40px]">
          <img src="illustration.png" alt="illustration" className="" />
          <div className="w-[455px] flex flex-col gap-[12px] justify-center items-center">
            <p className="jakarta text-[24px] font-[700]">
              Fund your creative work
            </p>
            <p className="manrope text-[16px] font-[400] text-center">
              Accept support. Start a membership. Setup a shop. It’s easier than
              you think.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
