import { applicationName } from "@/app-config";
import {
  deleteUser,
  getUserByEmail,
  updatePassword,
  updateUser,
} from "@/data-access/users";
import type { UserId, UserSession } from "@/use-cases/types";
import { env } from "@/env";
import { sendEmail } from "@/lib/send-email";
import {
  createPasswordResetToken,
  deletePasswordResetToken,
  getPasswordResetToken,
} from "@/data-access/reset-tokens";
import {
  deleteVerifyEmailToken,
  getVerifyEmailToken,
} from "@/data-access/verify-email";

import { createTransaction } from "@/data-access/utils";
import { PublicError } from "./errors";
import { deleteSessionForUser } from "@/data-access/sessions";
import TokenBasedEmail from "@/emails/token-based-email";

export async function deleteUserUseCase(
  authenticatedUser: UserSession,
  userToDeleteId: UserId
): Promise<void> {
  if (authenticatedUser.id !== userToDeleteId) {
    throw new PublicError("You can only delete your own account");
  }

  await deleteUser(userToDeleteId);
}

export function getDefaultImage(userId: UserId) {
  return `${env.NEXT_PUBLIC_HOST_NAME}/api/users/${userId}/images/default`;
}

export async function resetPasswordUseCase(email: string) {
  const user = await getUserByEmail(email);

  if (!user) {
    return null;
  }

  const token = await createPasswordResetToken(user.id);

  await sendEmail(
    email,
    `Your password reset link for ${applicationName}`,
    <TokenBasedEmail token={token} type="ResetPassword" />
  );
}

export async function changePasswordUseCase(token: string, password: string) {
  const tokenEntry = await getPasswordResetToken(token);

  if (!tokenEntry) {
    throw new PublicError("Invalid token");
  }

  const userId = tokenEntry.userId;

  await createTransaction(async (trx) => {
    await deletePasswordResetToken(token, trx);
    await updatePassword(userId, password, trx);
    await deleteSessionForUser(userId, trx);
  });
}

export async function verifyEmailUseCase(token: string) {
  const tokenEntry = await getVerifyEmailToken(token);

  if (!tokenEntry) {
    throw new PublicError("Invalid token");
  }

  const userId = tokenEntry.userId;

  await updateUser(userId, { emailVerified: new Date() });
  await deleteVerifyEmailToken(token);
  return userId;
}
