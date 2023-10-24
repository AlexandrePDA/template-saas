"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

{
  /* schema for form */
}
const formSchema = z.object({
  email: z
    .string()
    .email({
      message: "Email invalide",
    })
    .min(5, {
      message: "Email invalide",
    }),
  password: z
    .string()
    .min(8, {
      message: "Au moins 8 caractères",
    })
    .refine(
      (value) => {
        return (
          /\d/.test(value) &&
          /[!@#$%^&*(),.?":{}|<>]/.test(value) &&
          /[A-Z]/.test(value)
        );
      },
      {
        message:
          "Mot de passe doit contenir au moins un chiffre, une lettre majuscule et un caractère spécial",
      }
    ),
});

export default function Signin() {
  const [err, setErr] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  {
    /* sent to bdd */
  }
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.email);
    console.log(values.password);

    
    try {
      const result = await signIn("credentials", {
        username: values.email.toLowerCase(),
        password: values.password,
        redirect: true,
        callbackUrl: "/",
      });
      setErr(true)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-lg mx-auto my-12 p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.com" {...field} />
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
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input placeholder="" type="password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {err && (
            <Alert>
              <AlertTitle>🚨 Oups!</AlertTitle>
              <AlertDescription>
                Email ou mot de passe inccorect
              </AlertDescription>
            </Alert>
          )}

          <Button type="submit">Connect</Button>
        </form>
      </Form>
    </div>
  );
}
