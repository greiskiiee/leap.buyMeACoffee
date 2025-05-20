"use client";
import { Menu } from "@/components/Menu";
import { ChevronDown, Coffee } from "lucide-react";
import { Camera } from "lucide-react";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter name",
  }),
  about: z.string().min(10, {
    message: "Please enter info about yourself",
  }),
  url: z.string().min(4, {
    message: "Please enter a social link",
  }),
  photo: z
    .any()
    .refine((file) => file instanceof File || (file && file.length > 0), {
      message: "Please enter image",
    }),
});

export default function MyAccount() {
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      about: "",
      url: "",
      photo: null,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

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

        <div className="w-full h-fit flex flex-col justify-start gap-6 border border-[#E4E4E7] rounded-lg p-6">
          <p className="inter font-[700] text-[16px] text-[#09090B]">
            Personal info
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-3 relative">
                <FormField
                  control={form.control}
                  name="photo"
                  render={({ field }) => (
                    <FormItem>
                      <Input
                        type="file"
                        className="absolute top-[90px] hidden "
                        id="photo-upload"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setPreview(reader.result as string);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                      <p className="font-[500] text-[14px] text-[#09090B]">
                        Add photo
                      </p>
                      <Label
                        htmlFor="photo-upload"
                        className="font-[500] text-[14px] text-[#09090B] w-[160px] h-[160px] border-2 border-[#E4E4E7] border-dashed rounded-full flex justify-center items-center"
                      >
                        {preview ? (
                          <img
                            src={preview}
                            alt="Selected"
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <Camera
                            color="#18181B"
                            strokeWidth={1.5}
                            opacity={0.5}
                            size={23}
                          />
                        )}
                      </Label>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name here"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="about"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>About</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Write about yourself here"
                            {...field}
                            className="h-[131px] flex justify-start items-start "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Social media URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="w-full flex justify-end items-center">
                <Button type="submit" className="w-full">
                  Save changes
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
