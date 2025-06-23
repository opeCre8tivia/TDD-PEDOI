

"use server";

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function getDashboardStats() {
  const users = await prisma.users.count();

  const stats = [
  { label: "Total Users", value: users ? users : 0 },
  { label: "Farmers", value:0},
  { label: "Investors", value:0 },
  { label: "Farms", value:0 },
];
  return stats;
}
