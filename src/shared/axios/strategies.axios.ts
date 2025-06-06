import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type Method,
} from "axios";
import { saveAs } from "file-saver";

export interface IRequestStrategy {
  request<T = any>(
    endpoint: string,
    method: Method,
    data?: any,
    params?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<T>;

  downloadFile(
    endpoint: string,
    params?: Record<string, any>,
    method?: Method,
    headers?: Record<string, string>
  ): Promise<void>;

  uploadFile<T = any>(
    endpoint: string,
    files: File | File[] | Record<string, File | File[]>,
    extraData?: Record<string, any>,
    method?: Method,
    headers?: Record<string, string>
  ): Promise<T>;
}

export class AxiosStrategy implements IRequestStrategy {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      timeout: 10 * 60 * 1000,
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axiosInstance.interceptors.response.use(
      (res) => res,
      (error: AxiosError) => {
        const status = error.response?.status;
        if (status === 401 || status === 403) {
          window.location.href = "/login";
        }
        return Promise.reject(error);
      }
    );
  }

  async request<T>(
    endpoint: string,
    method: Method,
    data?: any,
    params?: Record<string, any>,
    headers: Record<string, string> = {}
  ): Promise<T> {
    const config: AxiosRequestConfig = {
      url: endpoint,
      method,
      data,
      params,
      headers,
    };

    const response = await this.axiosInstance.request<T>(config);
    return response.data;
  }

  async downloadFile(
    endpoint: string,
    params: Record<string, any> = {},
    method: Method,
    headers: Record<string, string> = {}
  ): Promise<void> {
    const response: AxiosResponse<Blob> = await this.axiosInstance.request({
      url: endpoint,
      method,
      params,
      headers,
      responseType: "blob",
    });

    const disposition = response.headers["content-disposition"];
    let filename = "download";

    if (disposition && disposition.includes("filename=")) {
      const match = disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
      if (match?.[1]) {
        filename = decodeURIComponent(match[1].replace(/['"]/g, ""));
      }
    }

    saveAs(response.data, filename);
  }

  async uploadFile<T = any>(
    endpoint: string,
    files: File | File[] | Record<string, File | File[]>,
    extraData: Record<string, any> = {},
    method: Method,
    headers: Record<string, string> = {}
  ): Promise<T> {
    const formData = new FormData();

    if (files instanceof File || Array.isArray(files)) {
      const fileList = Array.isArray(files) ? files : [files];
      fileList.forEach((file) => formData.append("files", file));
    } else {
      Object.entries(files).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((f) => formData.append(`${key}[]`, f));
        } else {
          formData.append(key, value);
        }
      });
    }

    Object.entries(extraData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const config: AxiosRequestConfig = {
      url: endpoint,
      method,
      data: formData,
      headers: {
        ...headers,
        "Content-Type": "multipart/form-data",
      },
    };

    const response = await this.axiosInstance.request<T>(config);
    return response.data;
  }
}
