"use client";

import { FC } from "react";
import { useAuth } from "../context/AuthContext";
import FaqList from "../components/FaqList";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { loginWithGoogle } from "@/firebase/auth";

const Home: FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Card className="w-[400px] shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-lg font-semibold">
              Please Log In
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4 text-gray-600">
              Log in to access the FAQs and your personalized content.
            </p>
            <Button
              variant="default"
              className="w-full"
              onClick={loginWithGoogle}
            >
              Log In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Welcome, {user.displayName}!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600 mb-6">
            Here are some frequently asked questions curated for you.
          </p>
          <FaqList />
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
