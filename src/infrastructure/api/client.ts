import { clientEnv } from '../config';

const BASE_URL = clientEnv.apiBaseUrl;

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions extends Omit<RequestInit, "method" | "body"> {
  params?: Record<string, string | number | boolean>;
  body?: unknown;
}

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(
  method: HttpMethod,
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const { params, body, ...fetchOptions } = options;

  let url = `${BASE_URL}${endpoint}`;
  if (params) {
    const searchParams = new URLSearchParams(
      Object.fromEntries(
        Object.entries(params).map(([k, v]) => [k, String(v)]),
      ),
    );
    url += `?${searchParams.toString()}`;
  }

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
    ...(body !== undefined && { body: JSON.stringify(body) }),
    ...fetchOptions,
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: response.statusText }));
    throw new ApiError(response.status, error.message ?? "Unknown error");
  }

  return response.json() as Promise<T>;
}

export const apiClient = {
  get: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>("GET", endpoint, options),

  post: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>("POST", endpoint, { ...options, body }),

  put: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>("PUT", endpoint, { ...options, body }),

  patch: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>("PATCH", endpoint, { ...options, body }),

  delete: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>("DELETE", endpoint, options),
};
