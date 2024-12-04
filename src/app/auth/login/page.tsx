import { loginWithGoogle } from "@/firebase/auth";
import { FC } from "react";

const LoginPage: FC = () => {
  return (
    <div className="container mx-auto p-4 flex justify-center items-center">
      <button
        onClick={loginWithGoogle}
        className="bg-blue-500 text-white px-6 py-3 rounded"
      >
        Login with Google
      </button>
    </div>
  );
};

export default LoginPage;
