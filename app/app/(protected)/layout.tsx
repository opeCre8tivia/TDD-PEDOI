import React from "react";
import { cookies } from "next/headers";
import { getUserByToken } from "./action";
import UserProvider from "./context/UserProvider";

const UserLayOut = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("user_token")?.value || "";
  const user = await getUserByToken(token);

  return (
    <UserProvider user={user}>
      <div className="w-full h-auto">
        {children}
      </div>
    </UserProvider>
  );
};

export default UserLayOut;