"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo"; // Adjust the import path if needed
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setLoading(true);
  try {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email,password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Login failed");
      setLoading(false);
      return;
    }
    if (data.token) {
      localStorage.setItem("admin_token", data.token);
      window.location.href = "/admin/dashboard";
    }
  } catch (err) {
    setError("An unexpected error occurred.");
    setLoading(false);
  }
  setLoading(false);
};

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white md:bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg md:shadow-md p-8 flex flex-col items-center">
        <Logo styles={{width:"90%",height:"90%"}} />
        <h1 className="text-2xl font-bold mb-2 text-center">Pedoi</h1>
        <p className="mb-6 text-gray-500 text-center">Enter your credentials to Login</p>
        
            <form className="w-full  flex flex-col gap-4" onSubmit={handleSubmit}>
                {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
)}
          <div>
            <Input
              id="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div>
            <Input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <Button 
          type="submit" 
          className="w-full mt-2"
          loading={loading}
          >
            Login
          </Button>
        </form>

        <Link href={"/app/register"}>
          <div 
        className="text-gray-600 font-medium text-[14px] text-right mt-4">
            Don't have account yet ? <span className="text-primary font-semibold">REGISTER</span>
        </div>
        </Link>
        </div>
   
    </main>
  );
};

export default Page;