"use client";
import React, { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";

const donations = [
  {
    value: "$1",
    label: "$1",
  },
  {
    value: "$2",
    label: "$2",
  },
  {
    value: "$5",
    label: "$5",
  },
  {
    value: "$10",
    label: "$10",
  },
];

export const RecentTransactions = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="w-full h-fit flex flex-col gap-3">
      <div className="w-full h-fit flex justify-between items-center">
        <p className="inter text-[16px] font-[600] text-[#18181B]">
          Recent transactions
        </p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-fit justify-between"
            >
              {/* {value
                ? dates.find((date) => date.value === value)?.label
                : dates[0].value} */}
              Amount
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Command>
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {donations.map((donation) => (
                    <CommandItem
                      key={donation.value}
                      value={donation.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Input
                        type="checkbox"
                        id="donation"
                        className={cn("mr-2 h-4 w-4")}
                      />
                      <Label htmlFor="donation">{donation.label}</Label>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className="w-full h-fit border border-[#E4E4E7] p-6 flex flex-col gap-4 rounded-lg">
        <div className="w-full h-fit flex flex-col p-3 gap-[10px]">
          <div className="w-full h-fit flex justify-between items-center">
            <div className="w-fit h-full flex gap-3">
              <img
                src="profile.jpg"
                alt="profile img"
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <div className="h-full flex flex-col justify-start">
                <p className="inter text-[14px] font-[700] text-[#09090B]">
                  username
                </p>
                <p className="inter text-[12px] font-[400] text-[#09090B]">
                  buymeacoffee.com/username
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1 items-end">
              <p className="inter font-[500] text-[16px]">+ $1</p>
              <p className="inter font-[400] text-[12px]">10 hours ago</p>
            </div>
          </div>

          <p className="inter font-[400] text-[14px] text-[#09090B]">
            Thank you for being so awesome everyday! You always manage to
            brighten up my day when I’m feeling down. Although $1 isn’t that
            much money it’s all I can contribute at the moment{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
