class RoleService {
  static instance: RoleService;
  private constructor() {}
  public static getInstance(): RoleService {
    if (!RoleService.instance) {
      RoleService.instance = new RoleService();
    }
    return RoleService.instance;
  }
}

export default RoleService.getInstance();
