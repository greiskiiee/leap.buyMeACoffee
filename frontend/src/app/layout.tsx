"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans, Manrope, Inter } from "next/font/google";
import "./globals.css";
import { AuthContext } from "@/components/contexts/AuthContext";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Buy me a coffee",
//   description: "Created by chimegerdene",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    log: false,
  });
  return (
    <html lang="en">
      <body className={`${jakarta.variable}   antialiased`}>
        <AuthContext.Provider value={{ user, setUser }}>
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
