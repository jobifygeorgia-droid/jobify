"use server";

import axios, { AxiosInstance } from "axios";

import {
  API_ENDPOINT,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/lib/constants";
import { auth } from "@/services/next-auth";

export const api: AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export const publicApi: AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(async (config) => {
  const data = await auth();

  const accessToken = data?.access;
  const refreshToken = data?.refresh;

  if (accessToken && refreshToken && config.headers)
    config.headers.Authorization = `Bearer ${accessToken}`;

  const cookieHeader = [
    accessToken ? `${ACCESS_TOKEN_KEY}=${accessToken}` : "",
    refreshToken ? `${REFRESH_TOKEN_KEY}=${refreshToken}` : "",
  ]
    .filter(Boolean)
    .join("; ");

  if (cookieHeader && config.headers) config.headers.Cookie = cookieHeader;

  return config;
});
