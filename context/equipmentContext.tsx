'use client';

import { createContext, useContext } from "react";
import { fetcher } from "../lib/fetcher";
import useSWR, { KeyedMutator } from "swr";
import { ReactNode } from "react";

export interface Equipment {
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
  data: Equipment[];
}

interface EquipmentContextType {
  equipment: EquipmentResponse | undefined;
  error: unknown;
  isLoading: boolean;
  mutate: KeyedMutator<EquipmentResponse>;
}

const EquipmentContext = createContext<EquipmentContextType | null>(null);

export function EquipmentProvider({ children }: { children: ReactNode }) {
  const { data, error, isLoading, mutate } = useSWR<EquipmentResponse>(
    "/api/equipmentRoutes/equipments",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0,
    }
  );

  return (
    <EquipmentContext.Provider
      value={{
        equipment: data,
        error,
        isLoading,
        mutate
      }}>
      {children}
    </EquipmentContext.Provider>
  );
}
export function useEquipment() {
  const context = useContext(EquipmentContext);
  if (!context) {
    throw new Error("useEquipment must be used inside EquipmentProvider");
  }
  return context;
}