import { FC, ReactNode } from "react";

import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";

interface LayouProps {
  children: ReactNode;
}
const Layout: FC<LayouProps> = ({ children }) => {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </AuthProvider>
  );
};

export default Layout;
