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

const LoginComponent = () => {

    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

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
            <h1 className="text-2xl font-bold mb-4">Log in to PFM</h1>
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
                <LoaderButton
                    isLoading={isLoading}
                    className="w-full"
                    type="submit"
                    onClick={() => console.log("123")}
                >
                    Log In
                </LoaderButton>
            </form>
        </Form>
    )
}

export default LoginComponent;