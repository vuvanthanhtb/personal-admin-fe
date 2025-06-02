import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { GET, POST } from "../constants";

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

    if (method === GET) {
      if (data && typeof data === "object") {
        const queryString = new URLSearchParams(data as Record<string, any>).toString();
        apiUrl = `${endpoint}?${queryString}`;
      }
    } else if (method === POST) {
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
