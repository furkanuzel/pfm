"use client";

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
import { register } from "@/actions/user.actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { loginWithGithub, loginWithGoogle } from "@/actions/user.actions";
import Container from "@/components/container";
import { toast } from "sonner";

export default function RegisterPage() {
  const router = useRouter();

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
      router.replace("/log-in");
      toast.success("Verification email sent to your email.");
    } else {
      setError({
        state: true,
        message: res.message as string,
      });
    }
    setIsLoading(false);
  }

  return (
    <Container>
      <div className="mx-auto max-w-[450px] max-md:w-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Create a Altmate account</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link className="text-blue-500" href={"/log-in"}>
              Log in
            </Link>
            .
          </p>
        </div>
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full text-sm"
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
                      className="w-full text-sm"
                      placeholder="Confirm your Password"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error.state && (
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Uh-oh, we couldn&apos;t log you in</AlertTitle>
                <AlertDescription>{error.message}</AlertDescription>
              </Alert>
            )}

            <LoaderButton
              isLoading={isLoading}
              className="w-full"
              type="submit"
            >
              Create account
            </LoaderButton>
          </form>
        </Form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-gray-100 px-2 text-gray-500 dark:bg-gray-950 dark:text-gray-400">
              or
            </span>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
            <Button onClick={() => loginWithGoogle()}>
              <GoogleIcon className="stroke-white mr-2 h-5 w-5" />
              Sign up with Google
            </Button>
            <Button onClick={() => loginWithGithub()}>
              <GithubIcon className="mr-2 h-5 w-5" />
              Sign up with GitHub
            </Button>
          </div>
        </div>
        <small className="mt-16 block">
          By signing up, you agree to our{" "}
          <Link className="text-blue-500" href={"/terms-of-service"}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="text-blue-500" href={"/privacy"}>
            Privacy Policy
          </Link>
          .
        </small>
      </div>
    </Container>
  );
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Google</title>
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
