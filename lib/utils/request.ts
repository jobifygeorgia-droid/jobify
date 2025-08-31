import { APIErrorMessages } from "@/interface/global.types";

export interface RequestOptions extends Omit<RequestInit, "body" | "headers"> {
  authToken?: string; // optional auth token
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
  queryParams?: Record<string, string | number | boolean>; // optional query params
}

type Request = <T>(url: string, params?: RequestOptions) => Promise<T>;

export const request: Request = async (url, params = {}) => {
  const { queryParams, authToken, headers, body, ...rest } = params;

  url = buildUrl(url, queryParams);

  try {
    const response = await fetch(url, {
      headers: generateHeaders(authToken, headers),
      body: JSON.stringify(body),
      ...rest,
    });

    await propagateError(response);

    return jsonData(response);
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error; // rethrow for caller to handle
  }
};

// helpers
function buildUrl(url: string, queryParams: RequestOptions["queryParams"]) {
  const API_ENDPOINT_ROOT = process.env.API_ENDPOINT as string;

  if (!API_ENDPOINT_ROOT) throw new Error("API Endpoint is not defined");

  url = `${API_ENDPOINT_ROOT}${url}/`;

  if (queryParams) {
    const queryString = new URLSearchParams(
      Object.entries(queryParams).map(([k, v]) => [k, String(v)])
    ).toString();

    url = `${url}?${queryString}`;
  }

  return url;
}

function generateHeaders(
  authToken: RequestOptions["authToken"],
  headers: RequestOptions["headers"]
) {
  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    ...headers,
  };

  return defaultHeaders;
}

async function propagateError(response: Response) {
  if (!response.ok) {
    // Parse JSON error if possible
    let errorData: APIErrorMessages = {};

    try {
      errorData = await response.json();
    } catch {
      // fallback: if not JSON, put the text inside a generic field
      errorData = { message: [await response.text()] };
    }

    const error = new Error(JSON.stringify(errorData));

    throw error;
  }
}

async function jsonData(response: Response) {
  const data = await response.json().catch(() => null);
  return data;
}
