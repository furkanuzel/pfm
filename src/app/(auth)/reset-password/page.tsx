"use client";

import { z } from "zod";

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
import { useServerAction } from "zsa-react";
import { LoaderButton } from "@/components/loader-button";
import { resetPasswordAction } from "./actions";
import Container from "@/components/container";
import { toast } from "sonner";

const registrationSchema = z.object({
  email: z.string().email(),
});

export default function ForgotPasswordPage() {
  const { execute, isPending, isSuccess } = useServerAction(
    resetPasswordAction,
    {
      onError({ err }) {
        toast.error(err.message);
      },
      onSuccess() {
        toast.success(
          "We have sent you an email with a link to reset your password."
        );
      },
    }
  );

  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof registrationSchema>) {
    execute(values);
  }

  return (
    <Container>
      <div className="mx-auto max-w-[450px] max-md:w-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Include the email address associated with your account and we’ll
            send you an email with instructions to reset your password.
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

            <LoaderButton
              isLoading={isPending}
              className="w-full"
              type="submit"
            >
              Send Reset Email
            </LoaderButton>
          </form>
        </Form>
      </div>
    </Container>
  );
}
