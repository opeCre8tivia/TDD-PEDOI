"use server"




export async function registerUser({ email, password,firstName,lastName,mobileNumber }: { email: string; password: string,firstName:string,lastName:string,mobileNumber:string }) {
  try {
    const API_URL = process.env.NEXT_API_URL

    const res = await fetch(`${API_URL}/api/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password,firstName,lastName,mobileNumber }),
    });
    const data = await res.json();
    if (!res.ok) {
      return { error: data.error || "Registration failed" };
    }
    return { ok: true };
  } catch (err: any) {
    console.log(err)
    return { error: "An unexpected error occurred." };
  }
}
