"use client";

import { FC } from "react";
import Link from "next/link";
import { logout } from "@/firebase/auth";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Navbar: FC = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">FAQ App</h1>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Avatar>
                <AvatarImage
                  src={user?.photoURL || "/assets/logo.png"}
                  alt="User"
                />
                <AvatarFallback>
                  {user?.displayName?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <span className="text-white">{user.displayName}</span>
              <Button variant="destructive" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Link href="/auth/login">
              <Button>Login with Google</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
