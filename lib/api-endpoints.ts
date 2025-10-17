export const api_endpoints = {
  auth: {
    register: "/register/",
    verifyEmail: "/verify-email/",
    login: "/login/",
    // login: "/token/email/",
    logout: "/logout/",
    refresh: "/token/refresh/",
    requestPasswordReset: "/request-password-reset-pin/",
    verifyPasswordResetPin: "/verify-password-reset-pin/",
    updatePassword: "/reset-password-confirm-pin/",
    changePassword: "/auth/change-password/",
  },
  vacancies: {
    vacancies: "/vacancies/",
    vipVacancies: "/vacancies/premium/",
    vacancyDetail: (id: string) => `/vacancies/${id}/`,
  },
  company: {
    myVacancies: "/vacancies/my/",
    myVacancy: (id: string) => `/vacancies/${id}/`,
    createVacancy: "/vacancies/create/",
  },
};
