// import React from "react";
import { VehicleShowcase } from "../../components/VehicleShowcase";
import { ContactPage } from "../../components/ContactPage";
import { Footer } from "../../components/Footer";

export const Box = (): JSX.Element => {
  return (
    <main className="w-full">
      <VehicleShowcase />
      <ContactPage />
      <Footer />
    </main>
  );
};
