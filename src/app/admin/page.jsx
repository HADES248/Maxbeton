'use client';
import { UserContext } from "@/hooks/user";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const Login = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "amol" && password === "test") {
      const loggedInUser = { username, password };
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      alert("Login successful!");
      router.push('/admin/dashboard');
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Welcome Admin</h2>
        <p className="text-sm text-center text-gray-600">Sign in to continue</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-gradient-to-l from-purple-500 to-blue-500 rounded-md transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
