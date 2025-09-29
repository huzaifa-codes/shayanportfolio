"use client";
import { createContext } from "react";

export type ConContextType = {
  Contect: boolean;
  setContect: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ConContext = createContext<ConContextType | undefined>(undefined);
