import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import 'remixicon/fonts/remixicon.css';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./globals.css";
import { UserProvider } from "@/context/userContext";
import { EquipmentProvider } from "@/context/equipmentContext";
import { MostViewedEquipmentProvider } from "@/context/mostViewContext";
import { HighlyRatedEquipmentProvider } from "@/context/highlyRatedContext";
import { RecommendationsEquipmentProvider } from "@/context/recommendationsContext";

export const metadata: Metadata = {
  title: "Warp5 Construction Equipment Rental",
  description: "Rent construction equipment with ease. Browse our extensive catalog, compare prices, and find the perfect machinery for your project. Fast, reliable, and affordable rentals at your fingertips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <UserProvider>
          <EquipmentProvider>
            <MostViewedEquipmentProvider>
              <HighlyRatedEquipmentProvider>
                <RecommendationsEquipmentProvider>
                  {children}
                </RecommendationsEquipmentProvider>
              </HighlyRatedEquipmentProvider>
            </MostViewedEquipmentProvider>
          </EquipmentProvider>
        </UserProvider>
        <Toaster />
      </body>
    </html>
  );
}
