import axios, { AxiosInstance, AxiosResponseHeaders } from "axios";

import { API_ENDPOINT } from "@/lib/constants";
import { getHeaders, logger } from "@/lib/utils";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

class PrivateApi {
  async mergeHeaders(cookieHeaders?: Array<string>) {
    const customHeaders = await getHeaders();

    const cookiesToMerge = cookieHeaders ? cookieHeaders.join("; ") : "";
    const cookies = customHeaders.headers?.Cookie
      ? customHeaders.headers.Cookie.concat("; ", cookiesToMerge)
      : cookiesToMerge;

    return {
      ...customHeaders,
      headers: { ...customHeaders?.headers, Cookie: cookies },
    };
  }

  async post<T, K>(
    url: string,
    data?: T | null,
    cookieHeaders?: Array<string>
  ): Promise<{ response: K; headers: Partial<AxiosResponseHeaders> }> {
    try {
      const customHeaders = await this.mergeHeaders(cookieHeaders);

      const { data: response, headers } = await axiosInstance.post(
        url,
        data,
        customHeaders
      );

      return { response, headers };
    } catch (error) {
      logger(error);
      throw error;
    }
  }

  async get<T>(
    url: string,
    cookieHeaders?: Array<string>
  ): Promise<{ response: T; headers: Partial<AxiosResponseHeaders> }> {
    try {
      const customHeaders = await this.mergeHeaders(cookieHeaders);

      const { data: response, headers } = await axiosInstance.get(
        url,
        customHeaders
      );

      return { response, headers };
    } catch (error) {
      logger(error);
      throw error;
    }
  }

  async delete<T>(
    url: string,
    cookieHeaders?: Array<string>
  ): Promise<{ response: T; headers: Partial<AxiosResponseHeaders> }> {
    try {
      const customHeaders = await this.mergeHeaders(cookieHeaders);

      const { data: response, headers } = await axiosInstance.delete(
        url,
        customHeaders
      );

      return { response, headers };
    } catch (error) {
      logger(error);
      throw error;
    }
  }

  async put<T, K>(
    url: string,
    data?: T | null,
    cookieHeaders?: Array<string>
  ): Promise<{ response: K; headers: Partial<AxiosResponseHeaders> }> {
    try {
      const customHeaders = await this.mergeHeaders(cookieHeaders);

      const { data: response, headers } = await axiosInstance.put(
        url,
        data,
        customHeaders
      );

      return { response, headers };
    } catch (error) {
      logger(error);
      throw error;
    }
  }

  async patch<T, K>(
    url: string,
    data?: T | null,
    cookieHeaders?: Array<string>
  ): Promise<{ response: K; headers: Partial<AxiosResponseHeaders> }> {
    try {
      const customHeaders = await this.mergeHeaders(cookieHeaders);

      const { data: response, headers } = await axiosInstance.patch(
        url,
        data,
        customHeaders
      );

      return { response, headers };
    } catch (error) {
      logger(error);
      throw error;
    }
  }
}

export const api = new PrivateApi();
