'use client';

import { createContext, useContext } from "react";
import { fetcher } from "../lib/fetcher";
import useSWR from "swr";
import { ReactNode } from "react";

export interface MostViewedEquipment {
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
  data: MostViewedEquipment[];
}

interface EquipmentContextType {
  mostViewedData: EquipmentResponse | undefined;
  error: any;
  isLoading: boolean;
  mutate: any;
}

const MostViewedEquipmentContext = createContext<EquipmentContextType | null>(null);

export function MostViewedEquipmentProvider({ children }: { children: ReactNode }) {
  const { data, error, isLoading, mutate } = useSWR<EquipmentResponse>(
    "/api/equipmentRoutes/mostViewed",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0,
    }
  );

  return (
    <MostViewedEquipmentContext.Provider
      value={{
        mostViewedData: data,
        error,
        isLoading,
        mutate
      }}>
      {children}
    </MostViewedEquipmentContext.Provider>
  );
}
export function useMostViewedEquipment() {
  const context = useContext(MostViewedEquipmentContext);
  if (!context) {
    throw new Error("useMostViewedEquipment must be used inside MostViewedEquipmentProvider");
  }
  return context;
}