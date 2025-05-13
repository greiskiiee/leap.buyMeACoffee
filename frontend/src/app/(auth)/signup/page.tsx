"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Coffee } from "lucide-react";
import { useRouter } from "next/navigation";
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
import Error from "next/error";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Please enter name",
  }),
});

export default function Signup() {
  const router = useRouter();
  const [usernameStatus, setUsernameStatus] = useState<
    "available" | "taken" | "checking" | ""
  >("");

  const [username, setUsername] = useState("");
  const usernameRef = useRef("");
  const [usernameError, setUsernameError] = useState("");

  const onClick = () => {
    router.push("/login");
  };

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
      }
    } catch (error) {
      console.error(error);
      setUsernameStatus("");
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await checkUsername(values.username);
    console.log(values);
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
            onClick={onClick}
            className="bg-[#F4F4F5] text-[#18181B] inter text-[14px] font-[500] hover:bg-[#F4F4F5]/50"
          >
            Log in
          </Button>
        </div>
        {/* username */}
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
                        <p className="text-gray-600 text-sm mt-1">
                          Checking...
                        </p>
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
      </div>{" "}
    </div>
  );
}
