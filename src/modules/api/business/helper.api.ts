import type { AssignRoleRequest } from "./model.api";

export const parseAssignRoleRequest = (data: AssignRoleRequest) => {
  return {
    endpoint: data.endpoint,
    role: (data.role ?? []).map((item: Record<string, unknown>) => item.value),
  };
};