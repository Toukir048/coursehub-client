import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { User } from "../types/user.types";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (data: LoginData) => boolean;
  register: (data: RegisterData) => boolean;
  demoLogin: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_USER: User = {
  _id: "demo-user-1",
  name: "CourseHub Demo User",
  email: "user@coursehub.com",
  image: "",
  role: "user",
  createdAt: new Date().toISOString(),
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("coursehub-user");

    if (savedUser) {
      setUser(JSON.parse(savedUser) as User);
    }

    setIsLoading(false);
  }, []);

  const saveUser = (loggedInUser: User) => {
    setUser(loggedInUser);
    localStorage.setItem(
      "coursehub-user",
      JSON.stringify(loggedInUser),
    );
  };

  const login = ({ email, password }: LoginData) => {
    if (
      email === "user@coursehub.com" &&
      password === "User123"
    ) {
      saveUser(DEMO_USER);
      return true;
    }

    return false;
  };

  const register = ({ name, email }: RegisterData) => {
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
        isLoading,
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

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};