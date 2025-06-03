import { GET } from "../constants";
import { mappingRequestMapper } from "../mapper";
import ApiProxyService from "./config.axios";

class RequestService {
  #service: ApiProxyService | null = null;

  constructor() {
    this.#service = new ApiProxyService();
  }

  async methodRequest(
    endpoint: string,
    data: any,
    model: any,
    method: string = GET,
    headers: Record<string, any> = {}
  ) {
    try {
      if (typeof mappingRequestMapper !== "function") {
        throw new Error("mappingRequestMapper is not a function.");
      }
      const body: Record<string, any> | null = mappingRequestMapper(
        model,
        data
      );
      
      if (!this.#service) {
        throw new Error("ApiProxyService is not initialized.");
      }

      const response = await this.#service.methodRequest(
        endpoint,
        body,
        method,
        headers
      );
      return response.data;
    } catch (error) {
      return null;
    }
  }
}

export default RequestService;
