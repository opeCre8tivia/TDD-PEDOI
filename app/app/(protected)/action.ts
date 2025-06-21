"use server"

import { PrismaClient } from "@/generated/prisma";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "changeme";

export async function getUserByToken(token: string) {
  try {
    if (!token) return null;
    let decoded: any;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return null;
    }
    const user = await prisma.users.findUnique({ where: { id: decoded.id } });
    if (!user) return null;
    const { password, ...userData } = user;
    return userData;
  } catch {
    return null;
  }
}
