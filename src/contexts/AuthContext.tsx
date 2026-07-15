import { useState, type ReactNode } from "react";
import type { User } from "../types/user.types";
import {
  AuthContext,
  type LoginData,
  type RegisterData,
} from "./auth.context";

const DEMO_USER: User = {
  _id: "demo-user-1",
  name: "CourseHub Demo User",
  email: "user@coursehub.com",
  image: "",
  role: "user",
  createdAt: new Date().toISOString(),
};

const getSavedUser = (): User | null => {
  try {
    const savedUser = localStorage.getItem("coursehub-user");

    if (!savedUser) {
      return null;
    }

    return JSON.parse(savedUser) as User;
  } catch {
    localStorage.removeItem("coursehub-user");
    return null;
  }
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(getSavedUser);

  const saveUser = (loggedInUser: User) => {
    setUser(loggedInUser);

    localStorage.setItem(
      "coursehub-user",
      JSON.stringify(loggedInUser),
    );
  };

  const login = ({ email, password }: LoginData): boolean => {
    if (
      email === "user@coursehub.com" &&
      password === "User123"
    ) {
      saveUser(DEMO_USER);
      return true;
    }

    return false;
  };

  const register = ({
    name,
    email,
  }: RegisterData): boolean => {
    const newUser: User = {
      _id: crypto.randomUUID(),
      name,
      email,
      image: "",
      role: "user",
      createdAt: new Date().toISOString(),
    };

    saveUser(newUser);
    return true;
  };

  const demoLogin = () => {
    saveUser(DEMO_USER);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("coursehub-user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading: false,
        login,
        register,
        demoLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;