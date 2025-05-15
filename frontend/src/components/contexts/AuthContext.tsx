"use client";
import { createContext } from "react";

interface User {
  email: string;
  password: string;
  log: boolean;
}

interface AuthContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const AuthContext = createContext<AuthContextType>({
  user: {
    email: "",
    password: "",
    log: false,
  },
  setUser: () => {}, // placeholder
});
