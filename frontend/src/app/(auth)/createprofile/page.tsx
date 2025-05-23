"use client";
import { Create1 } from "@/components/Create1";
import { Create2 } from "@/components/Create2";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProfile() {
  const [step, setStep] = useState<1 | 2>(1);

  const router = useRouter();

  const onClick = () => {
    router.push("/login");
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex w-full px-4 py-2 justify-between items-center">
        <div className="flex justify-center items-center gap-2 absolute top-[32px] left-[80px]">
          <Coffee color="#09090B" size={16} strokeWidth={3} />
          <p className="text-[#09090B] font-[700] text-[16px] inter">
            Buy Me Coffee
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 absolute top-[32px] right-[80px]">
          <Button
            onClick={onClick}
            className="bg-[#F4F4F5] text-[#18181B] inter text-[14px] font-[500] hover:bg-[#F4F4F5]/50"
          >
            Log out
          </Button>
        </div>
      </div>

      <div className="w-[510px] h-fit flex flex-col gap-6">
        {step === 1 ? (
          <Create1 onContinue={() => setStep(2)} />
        ) : (
          <Create2 onContinue={() => router.push("/")} />
        )}
      </div>
    </div>
  );
}
