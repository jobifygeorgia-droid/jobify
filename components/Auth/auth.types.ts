export const AuthModes = [
  "base",
  "password-update-method",
  "verify-user",
  "update-password",
  "update-success",
] as const;

export type AuthModeT = (typeof AuthModes)[number];
