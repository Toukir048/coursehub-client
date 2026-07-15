import { createContext } from "react";
import type { User } from "../types/user.types";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (data: LoginData) => boolean;
  register: (data: RegisterData) => boolean;
  demoLogin: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);