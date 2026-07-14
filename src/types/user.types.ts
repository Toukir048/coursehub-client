export type UserRole = "user" | "admin";

export interface User {
  _id: string;
  name: string;
  email: string;
  image?: string;
  role: UserRole;
  createdAt: string;
}

export interface AuthUser {
  user: User;
  token: string;
}