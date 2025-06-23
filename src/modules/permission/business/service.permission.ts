class PermissionService {
  static instance: PermissionService;
  private constructor() {}
  public static getInstance(): PermissionService {
    if (!PermissionService.instance) {
      PermissionService.instance = new PermissionService();
    }
    return PermissionService.instance;
  }
}

export default PermissionService.getInstance();
