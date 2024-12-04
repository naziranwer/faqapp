"use client";
import { FC } from "react";
import { useAuth } from "../context/AuthContext";
import FaqList from "../components/FaqList";

const Home: FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl">Please log in to view the FAQs.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl">Welcome, {user.displayName}!</h1>
      <FaqList />
    </div>
  );
};

export default Home;
