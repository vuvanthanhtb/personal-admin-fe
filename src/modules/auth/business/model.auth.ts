export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    refreshToken?: string;
    userId: string;
    expiresIn: number;
}