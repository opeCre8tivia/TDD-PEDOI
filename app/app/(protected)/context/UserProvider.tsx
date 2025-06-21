"use client";
import React from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({ user, children }: { user: any; children: React.ReactNode }) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}