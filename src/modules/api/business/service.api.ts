class ApiService {
  static instance: ApiService;
  private constructor() {}
  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }
}

export default ApiService.getInstance();
