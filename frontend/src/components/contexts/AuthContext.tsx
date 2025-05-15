"use client";
import { createContext } from "react";

// interface User {
//   email: string;
//   username: string;
//   password: string;
// }

// interface AuthContextType {
//   user: User;
//   setUser: React.Dispatch<React.SetStateAction<User>>;
// }

export const AuthContext = createContext({
  user: {
    email: "",
    username: "",
    password: "",
  },
  setUser: () => {}, // placeholder
});
