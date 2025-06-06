import { AxiosStrategy, type IRequestStrategy } from "./strategies.axios";
import type { Method } from "axios";
import { toastError } from "../utils";
import { GET, POST } from "../constants";

class RequestService {
  private static instance: RequestService;
  private strategy: IRequestStrategy;

  private constructor(strategy: IRequestStrategy) {
    this.strategy = strategy;
  }

  public static getInstance(): RequestService {
    if (!RequestService.instance) {
      RequestService.instance = new RequestService(new AxiosStrategy());
    }
    return RequestService.instance;
  }

  private handleError(error: unknown): void {
    toastError(error instanceof Error ? error.message : String(error));
  }

  async methodRequest<T = any>(
    endpoint: string,
    method: Method = GET,
    body: any = null,
    params: Record<string, any> = {},
    headers: Record<string, string> = {}
  ) {
    try {
      return await this.strategy.request<T>(
        endpoint,
        method,
        body,
        params,
        headers
      );
    } catch (error) {
    debugger

      this.handleError(error);
      return null;
    }
  }

  async download(
    endpoint: string,
    params: Record<string, any> = {},
    method: Method = GET,
    headers: Record<string, string> = {}
  ): Promise<void> {
    try {
      await this.strategy.downloadFile(endpoint, params, method, headers);
    } catch (error) {
      this.handleError(error);
    }
  }

  async upload<T = any>(
    endpoint: string,
    files: File | File[] | Record<string, File | File[]>,
    extraData: Record<string, any> = {},
    method: Method = POST,
    headers: Record<string, string> = {}
  ): Promise<T | null> {
    try {
      return await this.strategy.uploadFile<T>(
        endpoint,
        files,
        extraData,
        method,
        headers
      );
    } catch (error) {
      this.handleError(error);
      return null;
    }
  }
}

export default RequestService.getInstance();
