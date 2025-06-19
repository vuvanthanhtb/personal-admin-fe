import type { CreateOrUpdateUserRequest } from "./model.user";

export const parseCreateUserRequest = (data: CreateOrUpdateUserRequest) => {
  return {
    fullName: data.fullName,
    username: data.username,
    email: data.email,
    role: (data.role ?? []).map((item: Record<string, any>) => item.value),
  };
};

export const parseUpdateUserRequest = (data: CreateOrUpdateUserRequest) => {
  return {
    fullName: data.fullName,
    username: data.username,
    email: data.email,
    role: (data.role ?? []).map((item: Record<string, any>) => item.value),
    status: data.status ? data.status.value : null,
  };
};
