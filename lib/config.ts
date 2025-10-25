import { USER_TYPES, VACANCY_GROUPS } from "@/interface/global.types";

type PathT = Record<PathNameT, string>;
type PathNameT = (typeof ALL_ROUTES)[number]["name"];

export const cookieOptions = {
  path: "/",
  secure: false,
  httpOnly: true,
  sameSite: "lax" as const,
};

const ALL_ROUTES = [
  // OTHERS //
  {
    name: "faq",
    path: "/faq",
    isPrivate: false,
    roles: [],
  },

  // AUTH //
  {
    name: "sign_up",
    path: "/auth/signup",
    isPrivate: false,
    roles: [],
  },
  {
    name: "sign_up_user",
    path: "/auth/signup/user",
    isPrivate: false,
    roles: [],
  },
  {
    name: "sign_up_company",
    path: "/auth/signup/company",
    isPrivate: false,
    roles: [],
  },
  {
    name: "sign_in",
    path: "?auth=base",
    isPrivate: false,
    roles: [],
  },
  {
    name: "forgot_password",
    path: "?auth=password-update-method",
    isPrivate: false,
    roles: [],
  },
  {
    name: "forgot_password_verify_by_email",
    path: "?auth=verify-user&method=email",
    isPrivate: false,
    roles: [],
  },
  {
    name: "forgot_password_verify_by_phone",
    path: "?auth=verify-user&method=phone",
    isPrivate: false,
    roles: [],
  },
  {
    name: "forgot_password_update",
    path: "?auth=update-password",
    isPrivate: false,
    roles: [],
  },
  {
    name: "forgot_password_update_success",
    path: "?auth=update-success",
    isPrivate: false,
    roles: [],
  },
  {
    name: "email_verification",
    path: "/verify-email",
    isPrivate: false,
    roles: [],
  },
  {
    name: "email_verification_success",
    path: "/verify-email/success",
    isPrivate: false,
    roles: [],
  },
  {
    name: "email_verification_failure",
    path: "/verify-email/failure",
    isPrivate: false,
    roles: [],
  },

  // Home //
  {
    name: "home",
    path: "/",
    isPrivate: false,
    roles: [],
  },

  // Legal-Entity //
  {
    name: "company_create_vacancy",
    path: "/legal-entity/create-vacancy",
    isPrivate: true,
    roles: [USER_TYPES.EMPLOYER],
  },
  {
    name: "company_profile",
    path: "/legal-entity/:entityId/profile",
    isPrivate: true,
    roles: [USER_TYPES.EMPLOYER],
  },
  {
    name: "company_profile_guest",
    path: "/legal-entity/:entityId/guest",
    isPrivate: true,
    roles: [USER_TYPES.EMPLOYER],
  },
  {
    name: "company_inbox",
    path: "/legal-entity/:entityId/inbox?vacancy=:vacancyId",
    isPrivate: true,
    roles: [USER_TYPES.EMPLOYER],
  },
  {
    name: "company_vacancy_details",
    path: "/legal-entity/:entityId/vacancies/:vacancyId",
    isPrivate: true,
    roles: [USER_TYPES.EMPLOYER],
  },

  // Natural-Person //
  {
    name: "user_profile",
    path: "/user/:userId/profile",
    isPrivate: true,
    roles: [USER_TYPES.JOB_SEEKER, USER_TYPES.EMPLOYER],
  },
  {
    name: "user_create_cv",
    path: "/user/create-cv",
    isPrivate: true,
    roles: [USER_TYPES.JOB_SEEKER],
  },
  {
    name: "user_create_statement",
    path: "/user/create-statement",
    isPrivate: true,
    roles: [USER_TYPES.JOB_SEEKER],
  },

  // Vacancies //
  {
    name: "vacancies",
    path: "/vacancies",
    isPrivate: false,
    roles: [],
  },
  {
    name: "vacancies_groups_root",
    path: "/vacancies/groups",
    isPrivate: false,
    roles: [],
  },
  {
    name: "vacancies_groups",
    path: "/vacancies/groups?group=:group",
    isPrivate: false,
    roles: [],
  },
  {
    name: "vacancies_details",
    path: "/vacancies/:vacancyId",
    isPrivate: false,
    roles: [USER_TYPES.JOB_SEEKER],
  },

  // VIP-Vacancies //
  {
    name: "vip_vacancies",
    path: "/vip-vacancies",
    isPrivate: false,
    roles: [],
  },
] as const;

export const PATHS = ALL_ROUTES.reduce((acc, route) => {
  acc[route.name as PathNameT] = route.path;
  return acc;
}, {} as PathT);

export const DYNAMIC_ROUTES = {
  company_profile: (entityId: string | number) =>
    PATHS.company_profile.replace(":entityId", entityId.toString()),
  company_profile_guest: (entityId: string | number) =>
    PATHS.company_profile_guest.replace(":entityId", entityId.toString()),
  company_inbox: (entityId: string | number, vacancyId: string | number) =>
    PATHS.company_inbox
      .replace(":entityId", entityId.toString())
      .replace(":vacancyId", vacancyId.toString()),
  company_vacancy_details: (
    entityId: string | number,
    vacancyId: string | number
  ) =>
    PATHS.company_vacancy_details
      .replace(":entityId", entityId.toString())
      .replace(":vacancyId", vacancyId.toString()),
  user_profile: (userId: string | number) =>
    PATHS.user_profile.replace(":userId", userId.toString()),
  vacancies_groups: (group: VACANCY_GROUPS) =>
    PATHS.vacancies_groups.replace(":group", group),
  vacancy_details: (vacancyId: string | number) =>
    PATHS.vacancies_details.replace(":vacancyId", vacancyId.toString()),
} as const;

export const PRIVATE_ROUTES = ALL_ROUTES.filter((route) => route.isPrivate);

export const PUBLIC_ROUTES = ALL_ROUTES.filter((route) => !route.isPrivate);
