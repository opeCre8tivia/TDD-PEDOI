"use server";

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function getUserById(id: string) {
  if (!id) return null;
  const user = await prisma.users.findUnique({ where: { id } });
  if (!user) return null;
  const { password, ...userData } = user;
  return userData;
}
