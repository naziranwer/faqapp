"use client";

import { loginWithGoogle } from "@/firebase/auth";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const LoginPage: FC = () => {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Welcome to FAQ App
          </CardTitle>
          <CardDescription className="text-center">
            Please login to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Button onClick={handleLogin} size="lg" className="w-full mt-4">
            Login with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
