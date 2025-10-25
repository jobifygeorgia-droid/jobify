import axios, { AxiosInstance } from "axios";
import { CLIENT_API_ENDPOINT } from "@/lib/constants";

export const publicApiClient: AxiosInstance = axios.create({
  baseURL: CLIENT_API_ENDPOINT,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
