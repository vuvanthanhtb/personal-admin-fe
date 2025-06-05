import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

class ApiProxyService {
  #axios_instance: AxiosInstance | null = null;
  #headers = {
    "Content-Type": "application/json",
    responseType: "json",
  };

  constructor() {
    this.#axios_instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      timeout: 10 * 60 * 1000,
      withCredentials: true,
    });
  }

  methodRequest = (
    endpoint: string,
    data: Object | null,
    params: Object | null,
    method: string,
    headers?: Record<string, string>
  ) => {
    let apiUrl = endpoint;
    const config: AxiosRequestConfig = {
      headers: {
        ...this.#headers,
        ...headers,
      },
    };

    if (params && typeof params === "object") {
      const queryString = new URLSearchParams(
        params as Record<string, any>
      ).toString();
      apiUrl = `${endpoint}?${queryString}`;
    }

    if (headers && typeof headers === "object") {
      config.headers = { ...config.headers, ...headers };
    }

    if (data && typeof data === "object") {
      config["data"] = data;
    }

    if (!this.#axios_instance) {
      throw new Error("Axios instance is not initialized.");
    }

    return this.#axios_instance({
      method: method,
      url: apiUrl,
      ...config,
    });
  };
}

export default ApiProxyService;
