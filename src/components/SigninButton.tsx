"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import { User } from "lucide-react";

const SigninButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="flex items-center gap-4">
        <User/>
        <p>{session.user.name}</p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }
  return <Button onClick={() => signIn() }>Connexion</Button>
};

export default SigninButton;
