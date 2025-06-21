"use server"

import { cookies } from "next/headers";




export async function loginUser({ email, password }: { email: string; password: string}) {
  try {
    const API_URL = process.env.NEXT_API_URL
     const cookieStore = cookies();

    const res = await fetch(`${API_URL}/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      return { error: data.error || "Login failed" };
    }

    cookieStore.set("user_token",data.token)
    return {token:data.token};
  } catch (err: any) {
    console.log(err)
    return { error: "An unexpected error occurred." };
  }
}
