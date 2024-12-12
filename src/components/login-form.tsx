import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { LoginSchema } from "@/schemas/login-schema";
import { login } from "@/actions/user.actions";
import { LoaderButton } from "./loader-button";
import Link from "next/link";
import { toast } from "sonner";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    try {
      setIsLoading(true);
      const result = await login(values);
      if (result?.error) {
        toast.error(result.error);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full text-sm"
                  placeholder="alan.turing@example.com"
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-between">
                <span>Password</span>
                <Link className="text-blue-500" href={"/reset-password"}>
                  Forgot your password?
                </Link>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full text-sm"
                  placeholder="Your Password"
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoaderButton isLoading={isLoading} className="w-full" type="submit">
          Sign In
        </LoaderButton>
      </form>
    </Form>
  );
};

export default LoginForm;
