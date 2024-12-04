"use client";
import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "../components/Navbar";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

interface LayouProps {
  children: ReactNode;
}
const queryClient = new QueryClient();
const Layout: FC<LayouProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
            </div>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default Layout;
