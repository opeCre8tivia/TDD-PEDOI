"use server";

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

interface QnData {
  userId: string;
  roles: string[];
  initiatives: string[];
  numberOfGardens: number;
  resources: string[];
  aboutMembership: string;
  district: string;
  county: string;
  subCounty: string;
  zone: string;
}

export async function saveQuestionaire(data: QnData) {
  try {
    const questionaire = await prisma.questionaire.create({
      data: {
        userId: data.userId,
        roles: data.roles,
        initiatives: data.initiatives,
        numberOfGardens: data.numberOfGardens,
        resources: data.resources,
        aboutMembership: data.aboutMembership,
        district: data.district,
        county: data.county,
        subCounty: data.subCounty,
        zone: data.zone,
      },
    });
    return { success: true, questionaire };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
