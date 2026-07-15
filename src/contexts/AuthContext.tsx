import axios from "axios";
import { useEffect, useState, type ReactNode } from "react";
import { ACCESS_TOKEN_KEY } from "../api/apiClient";
import * as authService from "../services/auth.service";
import type { AuthUser, LoginPayload, RegisterPayload } from "../types/auth";
import { AuthContext } from "./auth.context";

interface AuthProviderProps {
  children: ReactNode;
}

const toError = (error: unknown): Error => {
  if (axios.isAxiosError<{ message?: string }>(error)) {
    return new Error(error.response?.data?.message ?? "Authentication failed.");
  }

  return error instanceof Error ? error : new Error("Authentication failed.");
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      if (!localStorage.getItem(ACCESS_TOKEN_KEY)) {
        setLoading(false);
        return;
      }

      try {
        const response = await authService.getCurrentUser();
        setUser(response.data.user);
      } catch {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
      } finally {
        setLoading(false);
      }
    };

    void restoreSession();
  }, []);

  const login = async (payload: LoginPayload) => {
    try {
      const response = await authService.login(payload);
      localStorage.setItem(ACCESS_TOKEN_KEY, response.data.accessToken);
      setUser(response.data.user);
    } catch (error) {
      throw toError(error);
    }
  };

  const register = async (payload: RegisterPayload) => {
    try {
      const response = await authService.register(payload);
      localStorage.setItem(ACCESS_TOKEN_KEY, response.data.accessToken);
      setUser(response.data.user);
    } catch (error) {
      throw toError(error);
    }
  };

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
