'use client';

import { createContext, useContext } from "react";
import { fetcher } from "../lib/fetcher";
import useSWR from "swr";
import { ReactNode } from "react";

export interface HighlyRatedEquipment {
  availability: boolean;
  createdAt: string;
  description: string;
  equipmentName: string;
  id: number;
  imageOne: string;
  imageThree: string;
  imageTwo: string;
  location: string;
  name: string;
  ownerId: number;
  ownerName: string;
  price: number;
  rating: number;
}

export interface EquipmentResponse {
  data: HighlyRatedEquipment[];
}

interface EquipmentContextType {
  higlyRatedData: EquipmentResponse | undefined;
  error: any;
  isLoading: boolean;
  mutate: any;
}

const HiglyRatedEquipmentContext = createContext<EquipmentContextType | null>(null);

export function HighlyRatedEquipmentProvider({ children }: { children: ReactNode }) {
  const { data, error, isLoading, mutate } = useSWR<EquipmentResponse>(
    "/api/equipmentRoutes/highlyRated",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0,
    }
  );

  return (
    <HiglyRatedEquipmentContext.Provider
      value={{
        higlyRatedData: data,
        error,
        isLoading,
        mutate
      }}>
      {children}
    </HiglyRatedEquipmentContext.Provider>
  );
}
export function useHighlyRatedEquipment() {
  const context = useContext(HiglyRatedEquipmentContext);
  if (!context) {
    throw new Error("useHighlyRatedEquipment must be used inside Highly Rated Equipment Provider");
  }
  return context;
}