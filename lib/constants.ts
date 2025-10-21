import { filterInitialState } from "./schemas/FilterSchema";

export const API_ENDPOINT = process.env.API_ENDPOINT;
export const CLIENT_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
export const IS_PRODUCTION = process.env.NEXT_PUBLIC_NODE_ENV === "production";
export const APP_ORIGIN = process.env.APP_ORIGIN;

export const ACCESS_TOKEN_KEY = "access_token";
export const REFRESH_TOKEN_KEY = "refresh_token";
export const PASSWORD_RESET_TOKEN_KEY = "reset_token";

export const allowedAddressTypes = [
  "road",
  "town",
  "city",
  "country",
  "village",
  "street",
] as const;

export const vacanciesFilterableKeys = Object.keys(filterInitialState);
