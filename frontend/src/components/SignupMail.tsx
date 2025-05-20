"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type MailnPass = {
  onContinue: () => void;
  setMail: (email: string) => void;
  setPass: (password: string) => void;
};

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const SignupMail = ({ onContinue, setMail, setPass }: MailnPass) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      setMail(values.email);
      setPass(values.password);
      console.log(values);
      onContinue();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[470px] h-fit flex flex-col justify-center items-center">
      <div className="w-full h-fit p-6 flex flex-col justify-center items-start gap-[6px]">
        <p className="inter font-[600] text-[24px] text-[#09090B]">Welcome</p>
        <p className="inter font-[400] text-[14px] text-[#71717A]">
          Connect email and set a password
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full h-fit px-6 pb-6 flex flex-col justify-center items-start gap-6"
        >
          <div className="w-full h-fit flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email here"
                      {...field}
                      type="mail"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full h-fit flex flex-col gap-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter password here"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full disabled:cursor-not-allowed">
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
};
