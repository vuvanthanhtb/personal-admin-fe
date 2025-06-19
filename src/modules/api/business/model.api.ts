export interface SearchApiRequest {
  endpoint: Record<string, any>[] | null;
}

export interface AssignRoleRequest {
  endpoint: string;
  role: Record<string, any>[] | null;
}
