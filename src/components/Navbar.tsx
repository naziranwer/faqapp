"use client";
import { FC } from "react";

import Link from "next/link";
import { logout } from "@/firebase/auth";
import { useAuth } from "@/context/AuthContext";

const Navbar: FC = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl">FAQ App</h1>
        <div className="flex items-center">
          {user ? (
            <>
              <img
                src={user.photoURL || "/assets/logo.png"}
                alt="User"
                className="w-8 h-8 rounded-full mr-4"
              />
              <span className="text-white mr-4">{user.displayName}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/auth/login">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Login with Google
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
