import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  type Method,
} from "axios";
import { saveAs } from "file-saver";
import {
  clearAllSession,
  getSession,
  REFRESH_TOKEN,
  removeSession,
  setSession,
  TOKEN_CURRENT,
} from "..";

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
  private isRefreshing = false;
  private failedQueue: any[] = [];

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      timeout: 10 * 60 * 1000,
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig | any) => {
        const token = getSession<string>(TOKEN_CURRENT);

        if (token) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          };
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest: InternalAxiosRequestConfig | any = error.config;
        if (error.response?.status === 403) {
          removeSession(TOKEN_CURRENT);
          removeSession(REFRESH_TOKEN);
          clearAllSession();
          window.location.href = "/login";
        }

        if (error.response?.status === 401 && !originalRequest?._retry) {
          if (this.isRefreshing) {
            return new Promise((resolve) => {
              this.failedQueue.push((token: string) => {
                originalRequest.headers["Authorization"] = "Bearer " + token;
                resolve(this.axiosInstance(originalRequest));
              });
            });
          }

          originalRequest._retry = true;
          this.isRefreshing = true;

          try {
            const refreshToken = localStorage.getItem(REFRESH_TOKEN);
            const response = await axios.post(
              `${import.meta.env.VITE_API_URL}/auth/refresh`,
              { refreshToken }
            );
            const { accessToken, refreshToken: newRefreshToken } =
              response.data;

            setSession(TOKEN_CURRENT, accessToken);
            setSession(REFRESH_TOKEN, newRefreshToken);

            this.failedQueue.forEach((cb) => cb(accessToken));
            this.failedQueue = [];

            return this.axiosInstance(originalRequest);
          } catch (err) {
            removeSession(TOKEN_CURRENT);
            removeSession(REFRESH_TOKEN);
            clearAllSession();
            window.location.href = "/login";
            return Promise.reject(err);
          } finally {
            this.isRefreshing = false;
          }
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
