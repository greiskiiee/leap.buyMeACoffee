"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Coffee } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const onClick = () => {
    router.push("/signup");
  };
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
          <Button
            className="bg-[#F4F4F5] text-[#18181B] inter text-[14px] font-[500] hover:bg-[#F4F4F5]/50"
            onClick={onClick}
          >
            Sign up
          </Button>
        </div>
        {/* username */}
        <div className="w-[470px] h-fit flex flex-col justify-center items-center">
          <div className="w-full h-fit p-6 flex flex-col justify-center items-start gap-[6px]">
            <p className="inter font-[600] text-[24px] text-[#09090B]">
              Welcome back
            </p>
          </div>

          <div className="w-full h-fit px-6 pb-6 flex flex-col justify-center items-start gap-4">
            <div className="w-full h-fit flex flex-col gap-2 justify-center items-start">
              <Label className="inter font-[500] text-[14px] text-[#09090B]">
                Email
              </Label>
              <Input
                placeholder="Enter email here"
                type="text"
                className="border border-[#E4E4E7]"
              />
            </div>
            <div className="w-full h-fit flex flex-col gap-2 justify-center items-start">
              <Label className="inter font-[500] text-[14px] text-[#09090B]">
                Password
              </Label>
              <Input
                placeholder="Enter password here"
                type="password"
                className="border border-[#E4E4E7]"
              />
            </div>
          </div>

          <div className="w-full h-fit px-6 pb-6 flex flex-col justify-center items-start gap-[6px]">
            <Button className="w-full">Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
