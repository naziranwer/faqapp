"use client";
import { loginWithGoogle } from "@/firebase/auth";
import { FC } from "react";
import { useRouter } from "next/navigation";

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
    <div className="container mx-auto p-8 flex justify-center items-center min-h-screen b">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Welcome to FAQ App
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please login to continue
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
