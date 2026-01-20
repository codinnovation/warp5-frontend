'use client';

import { createContext, useContext } from "react";
import { fetcher } from "../lib/fetcher";
import useSWR, { KeyedMutator } from "swr";
import { ReactNode } from "react";

export interface RecommendationsEquipment {
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
  data: RecommendationsEquipment[];
}

interface EquipmentContextType {
  recommendedData: EquipmentResponse | undefined;
  error: unknown;
  isLoading: boolean;
  mutate: KeyedMutator<EquipmentResponse>;
}

const RecommendationsEquipmentContext = createContext<EquipmentContextType | null>(null);

export function RecommendationsEquipmentProvider({ children }: { children: ReactNode }) {
  const { data, error, isLoading, mutate } = useSWR<EquipmentResponse>(
    "/api/equipmentRoutes/recommendations",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0,
    }
  );

  return (
    <RecommendationsEquipmentContext.Provider
      value={{
        recommendedData: data,
        error,
        isLoading,
        mutate
      }
      }>
      {children}
    </RecommendationsEquipmentContext.Provider>
  );
}
export function useRecommendationsEquipment() {
  const context = useContext(RecommendationsEquipmentContext);
  if (!context) {
    throw new Error("useRecommendationsEquipment must be used inside RecommendationsEquipmentProvider");
  }
  return context;
}