"use client";
import { FC, ReactNode } from "react";

import Navbar from "../components/Navbar";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

interface LayouProps {
  children: ReactNode;
}
const Layout: FC<LayouProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
};

export default Layout;
