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
import axios from "axios";

type CheckNameprops = {
  onContinue: () => void;
  setUsernameGlobal: (username: string) => void;
};

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Please enter name",
  }),
});

export const SignupCheckname = ({
  onContinue,
  setUsernameGlobal,
}: CheckNameprops) => {
  const [usernameStatus, setUsernameStatus] = useState<
    "available" | "taken" | "checking" | ""
  >("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const checkUsername = async (username: string) => {
    if (!username || username.length < 2) return;
    setUsernameStatus("checking");
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/auth/check`,
        { username }
      );
      if (res.data?.message === "Username already taken") {
        setUsernameStatus("taken");
      } else {
        setUsernameStatus("available");
        setUsernameGlobal(username);
      }
    } catch (error) {
      console.error(error);
      setUsernameStatus("");
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await checkUsername(values.username);
    console.log(values);
    onContinue();
  };

  return (
    <div className="w-[470px] h-fit flex flex-col justify-center items-center">
      <div className="w-full h-fit p-6 flex flex-col justify-center items-start gap-[6px]">
        <p className="inter font-[600] text-[24px] text-[#09090B]">
          Create Your Account
        </p>
        <p className="inter font-[400] text-[14px] text-[#71717A]">
          Choose a username for your page
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name here"
                      {...field}
                      onBlur={(e) => checkUsername(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                  {usernameStatus === "available" && (
                    <p className="text-green-600 text-sm mt-1">
                      Username is available ✅
                    </p>
                  )}
                  {usernameStatus === "taken" && (
                    <p className="text-red-600 text-sm mt-1">
                      Username is already taken ❌
                    </p>
                  )}
                  {usernameStatus === "checking" && (
                    <p className="text-gray-600 text-sm mt-1">Checking...</p>
                  )}
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full disabled:cursor-not-allowed"
            disabled={!(usernameStatus === "available")}
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
};
