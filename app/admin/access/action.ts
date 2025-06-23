"use server"

import { cookies } from "next/headers";


  const loginAdmin = async ({email,password}:{email:string,password:string}) => {

  try {
    const cookieStore = cookies()
    const API_URL = process.env.NEXT_API_URL

    const res = await fetch(`${API_URL}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email,password }),
    });

    const data = await res.json();
    if (!res.ok) {
      return { error: data.error || "Login failed" };
    }

    if (data.token) {
      cookieStore.set("admin_token",data.token)
      return {ok:true}
    }

  } catch (err) {
      return { error: "An unexpected error occurred." };
  }
  
};

export default loginAdmin
