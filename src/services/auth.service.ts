import apiClient from "../api/apiClient";
import type {
  AuthResponse,
  CurrentUserResponse,
  LoginPayload,
  RegisterPayload,
} from "../types/auth";

export const login = async (payload: LoginPayload) => {
  const response = await apiClient.post<AuthResponse>("/auth/login", payload);
  return response.data;
};

export const register = async (payload: RegisterPayload) => {
  const response = await apiClient.post<AuthResponse>("/auth/register", payload);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await apiClient.get<CurrentUserResponse>("/auth/me");
  return response.data;
};
