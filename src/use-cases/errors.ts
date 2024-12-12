import { CredentialsSignin } from "@auth/core/errors";

export class CredentialEmailInUseError extends CredentialsSignin {
  code = "EmailInUseError";
  message = "Email is already in use";
}

export class CredentialLogInError extends CredentialsSignin {
  code = "LoginError";
  message = "Invalid email or password";
}

export class CredentialEmailVerificationError extends CredentialsSignin {
  code = "EmailVerificationError";
  message = "You must verify your email.";
}

export const getError = (errorCode: string) => {
  switch (errorCode) {
    case "EmailInUseError":
      return CredentialEmailInUseError;
    case "EmailVerificationError":
      return CredentialEmailVerificationError;
    default:
      return CredentialLogInError;
  }
};

export class PublicError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class AuthenticationError extends PublicError {
  constructor() {
    super("You must be logged in to view this content");
    this.name = "AuthenticationError";
  }
}

export class EmailInUseError extends PublicError {
  constructor() {
    super("Email is already in use");
    this.name = "EmailInUseError";
  }
}

export class NotFoundError extends PublicError {
  constructor() {
    super("User not found");
    this.name = "NotFoundError";
  }
}

export class TokenExpiredError extends PublicError {
  constructor() {
    super("Token has expired");
    this.name = "TokenExpiredError";
  }
}

export class LoginError extends PublicError {
  constructor() {
    super("Invalid email or password");
    this.name = "LoginError";
  }
}

export class EmailVerificationError extends PublicError {
  constructor() {
    super("You must verify your email.");
    this.name = "VerificationError";
  }
}
