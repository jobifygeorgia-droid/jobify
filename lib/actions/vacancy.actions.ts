"use server";

import {
  VacancyT,
  GetVacanciesResponseT,
} from "@/interface/db/vacancies.types";
import { actionWrapper } from "@/lib/utils";
import { api_endpoints } from "@/lib/api-endpoints";
import { api } from "@/services/axios/axios-server";
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
