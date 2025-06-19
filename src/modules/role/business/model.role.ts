export interface SearchRolesRequest {
  name: string;
}

export interface CreateOrUpdateRoleRequest {
  name: string;
  permission: Record<string, any>[] | null;
}
