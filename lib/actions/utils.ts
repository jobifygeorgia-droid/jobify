"use server";

import { api } from "@/services/axios/axios-server";
import { api_endpoints } from "@/lib/api-endpoints";
import { actionWrapper } from "@/lib/utils";

export async function getAudienceTags() {
  return await actionWrapper(async () => {
    const { response } = await api.get<any>(api_endpoints.utils.audienceTags);

    return response;
  });
}

export async function getSectors() {
  return await actionWrapper(async () => {
    const { response } = await api.get<any>(api_endpoints.utils.sectors);

    return response;
  });
}
