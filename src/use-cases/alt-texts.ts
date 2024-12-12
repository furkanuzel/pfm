import {
  createAltText,
  deleteAltText,
  getAltTexts,
  getAltTextsCount,
} from "@/data-access/alt-texts";
import type { UserId } from "./types";

export async function generateAltTextUseCase(altText: {
  userId: UserId;
  imageUrl: string;
  altText: string;
  createdAt: Date;
}) {
  return await createAltText(altText);
}

export async function getAltTextUseCase(userId: UserId) {
  return await getAltTexts(userId);
}

export async function getAltTextCountUseCase(userId: UserId) {
  return await getAltTextsCount(userId);
}

export async function deleteAltTextUseCase(altTextId: string) {
  return await deleteAltText(altTextId);
}
