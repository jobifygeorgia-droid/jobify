export type APIErrorMessages = Record<string, Array<string> | string>;

export type PageParamsT = {
  searchParams: Promise<Record<string, string | undefined>>;
  params: Promise<Record<string, string | undefined>>;
};

export enum VACANCY_GROUPS {
  GROUP_1 = "tutors",
  GROUP_2 = "ukrainian",
  GROUP_3 = "students",
  GROUP_4 = "immigrants",
}

export const AuthModes = [
  "base",
  "password-update-method",
  "verify-user",
  "update-password",
  "update-success",
] as const;

export type AuthModeT = (typeof AuthModes)[number];
