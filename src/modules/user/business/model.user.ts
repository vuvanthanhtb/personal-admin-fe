export interface SearchUsersRequest {
  username: string;
  role: Record<string, any> | null;
}

export interface CreateOrUpdateUserRequest {
  fullName: string;
  username: string;
  email: string;
  status?: Record<string, any> | null;
  role: Record<string, any>[] | null;
}
