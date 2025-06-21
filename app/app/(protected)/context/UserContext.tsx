"use client"

import React, { createContext, useContext } from "react";

export const UserContext = createContext<any>(null);

export const useUser = () => useContext(UserContext);