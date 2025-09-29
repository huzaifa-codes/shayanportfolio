"use client";
import { useContext } from "react";
import { ConContext } from "./ConContext";
import type { ConContextType } from "./ConContext";

export const useConContext = (): ConContextType => {
  const context = useContext(ConContext);
  if (!context) {
    throw new Error("useConContext must be used within a ContextProvider");
  }
  return context;
};
