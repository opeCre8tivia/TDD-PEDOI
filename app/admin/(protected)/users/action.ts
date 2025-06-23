"use server";

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function getAllUsers() {
  const users = await prisma.users.findMany({
    include: {
      questionaire: true,
    },
  });
  // Omit password from each user
  return users.map(({ password, ...rest }) => rest);
}
