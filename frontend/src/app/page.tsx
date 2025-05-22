import { Menu } from "@/components/Menu";
import { Navigation } from "@/components/Navigation";
import { RecentTransactions } from "@/components/RecentTransactions";
import { User } from "@/components/User";
import { ChevronDown, Coffee } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center absolute">
      <Navigation />

      <Menu />
      <div className="w-[955px] h-fit flex absolute top-[130px] left-[405px]">
        <div className="w-[955px] h-fit flex flex-col gap-8 px-6">
          <User />
        </div>
      </div>
    </div>
  );
}
