"use client";
import React from "react";
import { Button } from "./ui/button";
import { Check, ChevronsUpDown, Copy } from "lucide-react";
import { Separator } from "@/components/ui/separator";
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

const dates = [
  {
    value: "Last 30 days",
    label: "Last 30 days",
  },
  {
    value: "Last 90 days",
    label: "Last 90 days",
  },
  {
    value: "All time",
    label: "All time",
  },
];

export const User = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full h-fit flex flex-col p-6 gap-3 border border-[#E4E4E7] rounded-lg">
      <div className="w-full flex justify-between items-center">
        <div className="w-fit h-full flex gap-3">
          <img
            src="profile.jpg"
            alt="profile img"
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <div className="h-full flex flex-col justify-start">
            <p className="inter text-[16px] font-[700] text-[#09090B]">
              username
            </p>
            <p className="inter text-[14px] font-[400] text-[#09090B]">
              buymeacoffee.com/username
            </p>
          </div>
        </div>

        <Button>
          <Copy size={16} color="#FAFAFA" />
          Share page link
        </Button>
      </div>

      <div className="h-[33px] flex justify-center items-center">
        <Separator />
      </div>

      <div className="w-full flex flex-col gap-6">
        <div className="flex gap-4">
          <p className="inter text-[#18181B] text-[20px] font-[600]">
            Earnings
          </p>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                {value
                  ? dates.find((date) => date.value === value)?.label
                  : dates[0].value}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {dates.map((date) => (
                      <CommandItem
                        key={date.value}
                        value={date.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === date.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {date.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <p className="inter font-[700] text-[36px] text-[#09090B]">$450</p>
      </div>
    </div>
  );
};
