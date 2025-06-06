'use client';
import showCustomAlert from "@/components/Alert";
import { UserContext } from "@/hooks/user";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const Login = () => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.username);
        localStorage.setItem("user", JSON.stringify(data.username));
        showCustomAlert("Login Successful", "success");
        router.push("/admin/dashboard");
      } else {
        showCustomAlert(data.message || "Invalid Username or Password", "danger");
      }
    } catch (error) {
      showCustomAlert("Something went wrong. Please try again.", "danger");
      console.error("Login error:", error);
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
