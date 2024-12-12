"use server";
import { addCredit, decrementCredit, getCredit } from "@/data-access/credits";
import type { UserId } from "./types";

export async function decrementCreditUseCase(userId: UserId) {
  return await decrementCredit(userId);
}

export async function addCreditUseCase(userId: UserId, credit: number) {
  return await addCredit(userId, credit);
}

export async function getCreditUseCase(userId: UserId) {
  const response = await getCredit(userId);
  return response;
}
