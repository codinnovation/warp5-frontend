"use client";
import { ReactNode } from "react";
import { createContext, useContext } from "react";
import { fetcher } from "../lib/fetcher";
import useSWR, { KeyedMutator } from "swr";

type User = {
  addressLine1: string;
  addressLine2: string;
  city: string;
  createdAt: string;
  dateOfBirth: string;
  email: string;
  firstName: string;
  lastName: string;
  id: number;
  phoneNumber: string;
};

type UserContextType = {
  user: User | null;
  error: unknown;
  isLoading: boolean;
  mutate: KeyedMutator<unknown>;
} | null;

const UserContext = createContext<UserContextType>(null);


export function UserProvider({ children }: { children: ReactNode }) {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/auth/user",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0,
    }
  );

  return (
    <UserContext.Provider
      value={{
        user: data?.user || null,
        error,
        isLoading,
        mutate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return context;
}