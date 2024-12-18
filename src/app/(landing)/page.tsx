"use client"

import type { z } from "zod";
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
import { LoaderButton } from "@/components/loader-button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { RegisterSchema } from "@/schemas/register-schema";
import { login, register } from "@/actions/user.actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { loginWithGithub, loginWithGoogle } from "@/actions/user.actions";
import Container from "@/components/container";
import { toast } from "sonner";
import Wrapper from "@/components/wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginSchema } from "@/schemas/login-schema";
import LoginComponent from "./login";

export default function Home() {
  const [error, setError] = useState({
    state: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    setIsLoading(true);
    const res = await register(values);
    if (res.success) {
      toast.success("Verification email sent to your email.");
    } else {
      toast.error(res.message);
    }
    setIsLoading(false);
  }

  return (
    <Wrapper>
      <main className="mx-auto max-w-lg">
        <Tabs defaultValue="sign-up" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
            <TabsTrigger value="sign-in">Sign In</TabsTrigger>
          </TabsList>
          <TabsContent className="py-4" value="sign-up">
            <Form {...form}>
              <h1 className="text-2xl font-bold mb-4">Create a PFM Account</h1>

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
                          className="w-full text-xs"
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full text-xs"
                          placeholder="Your password"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full text-xs"
                          placeholder="Confirm your Password"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <LoaderButton
                  isLoading={isLoading}
                  className="w-full"
                  type="submit"
                >
                  Register
                </LoaderButton>
              </form>
            </Form>
          </TabsContent>
          <TabsContent className="py-4" value="sign-in">
            <LoginComponent />
          </TabsContent>
        </Tabs>
      </main>
    </Wrapper>
  );
}
