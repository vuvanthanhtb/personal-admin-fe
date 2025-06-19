import type { CreateOrUpdatePermissionRequest } from "./model.permission";

export const parseCreatePermissionRequest = (data: CreateOrUpdatePermissionRequest) => {
  return {
    name: data.name.trim().toUpperCase(),
  };
};

export const parseUpdatePermissionRequest = (data: CreateOrUpdatePermissionRequest) => {
  return {
    name: data.name.trim().toUpperCase(),
  };
};
