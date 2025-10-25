"use server";

import {
  VacancyT,
  GetVacanciesResponseT,
} from "@/interface/db/vacancies.types";
import { auth } from "@/services/next-auth";
import { DYNAMIC_ROUTES, PATHS } from "@/lib/config";
import { api } from "@/services/axios/axios-server";
import { api_endpoints } from "@/lib/api-endpoints";
import { actionWrapper, pathsRevalidation } from "@/lib/utils";
import { VacancySchemaT } from "@/lib//schemas/company/VacancySchema";
import { PaginatedRequestParamsT } from "@/interface/db/common.types";

export async function createVacancy(data: VacancySchemaT) {
  return await actionWrapper(async () => {
    const { response } = await api.post(
      api_endpoints.company.createVacancy,
      data
    );

    return response;
  });
}

export async function getCompanyOwnVacancies(params: PaginatedRequestParamsT) {
  return await actionWrapper(async () => {
    const query = params.query ? `&${params.query}` : "";

    const { response } = await api.get<GetVacanciesResponseT>(
      `${api_endpoints.company.myVacancies}?limit=${params.limit}${query}`
    );

    return response;
  });
}

export async function getVacancy(id: string) {
  return await actionWrapper(async () => {
    const { response } = await api.get<VacancyT>(
      api_endpoints.company.myVacancy(id)
    );

    return response;
  });
}

export async function getCompanyOwnVacancy(id: string) {
  return await actionWrapper(async () => {
    const { response } = await api.get<VacancyT>(
      api_endpoints.company.myVacancy(id)
    );

    return response;
  });
}

export async function getVacancies(params: PaginatedRequestParamsT) {
  return await actionWrapper(async () => {
    const query = params.query ? `&${params.query}` : "";

    const { response } = await api.get<GetVacanciesResponseT>(
      `${api_endpoints.vacancies.vacancies}?limit=${params.limit}${query}`
    );

    return response;
  });
}

export async function getVIPVacancies(params: PaginatedRequestParamsT) {
  return await actionWrapper(async () => {
    const query = params.query ? `&${params.query}` : "";

    const { response } = await api.get<GetVacanciesResponseT>(
      `${api_endpoints.vacancies.vipVacancies}?limit=${params.limit}${query}`
    );

    return response;
  });
}

export async function deleteVacancy(id: string) {
  return await actionWrapper(async () => {
    const session = await auth();

    if (!session?.user) throw new Error("თქვენ არ ხართ ავტორიზებული");

    const { response } = await api.delete(
      api_endpoints.company.deleteVacancy(id)
    );

    pathsRevalidation([
      PATHS.home,
      PATHS.vacancies,
      PATHS.vip_vacancies,
      PATHS.vacancies_groups_root,
      DYNAMIC_ROUTES.company_profile(session.user.id),
    ]);

    return response;
  });
}
