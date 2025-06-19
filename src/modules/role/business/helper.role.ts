import type { CreateOrUpdateRoleRequest } from "./model.role";

export const parseCreateRoleRequest = (data: CreateOrUpdateRoleRequest) => {
  return {
    name: data.name,
    permission: (data.permission ?? []).map((item: Record<string, any>) => item.value),
  };
};

export const parseUpdateRoleRequest = (data: CreateOrUpdateRoleRequest) => {
  return {
    name: data.name,
    permission: (data.permission ?? []).map((item: Record<string, any>) => item.value),
  };
};
