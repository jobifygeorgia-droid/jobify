import { VACANCY_GROUPS } from "@/interface/global.types";

export const PATHS = {
  // OTHERS //
  faq: "/faq",

  // AUTH //
  sign_up: "/auth/signup",
  sign_up_user: "/auth/signup/user",
  sign_up_company: "/auth/signup/company",
  sign_in: "?auth=base",
  forgot_password: "?auth=password-update-method",
  forgot_password_verify_by_email: "?auth=verify-user&method=email",
  forgot_password_verify_by_phone_number:
    "?auth=verify-user&method=phone-number",
  forgot_password_update: "?auth=update-password",
  forgot_password_update_success: "?auth=update-success",

  // Home //
  home: "/",

  // Legal-Entity //
  company_create_vacancy: "/legal-entity/create-vacancy",
  company_profile: "/legal-entity/:entityId/profile",
  company_inbox: "/legal-entity/:entityId/inbox?vacancy=:vacancyId",
  company_vacancy_details: "/legal-entity/:entityId/vacancies/:vacancyId",

  // Natural-Person //
  user_profile: "/user/:userId/profile",
  user_create_cv: "/user/create-cv",
  user_create_statement: "/user/create-statement",

  // Vacancies //
  vacancies: "/vacancies",
  vacancies_groups: "/vacancies/groups?group=:group",
  vacancies_details: "/vacancies/:vacancyId",

  // VIP-Vacancies //
  vip_vacancies: "/vip-vacancies",
};

export const DYNAMIC_ROUTES = {
  company_profile: (entityId: string) =>
    PATHS.company_profile.replace(":entityId", entityId),
  company_inbox: (entityId: string, vacancyId: string) =>
    PATHS.company_inbox
      .replace(":entityId", entityId)
      .replace(":vacancyId", vacancyId),
  company_vacancy_details: (entityId: string, vacancyId: string) =>
    PATHS.company_vacancy_details
      .replace(":entityId", entityId)
      .replace(":vacancyId", vacancyId),
  user_profile: (userId: string) =>
    PATHS.user_profile.replace(":userId", userId),
  vacancies_groups: (group: VACANCY_GROUPS) =>
    PATHS.vacancies_groups.replace(":group", group),
  vacancy_details: (vacancyId: string) =>
    PATHS.vacancies_details.replace(":vacancyId", vacancyId),
};
