'use client'
import { createContext } from 'react'

type ConContextType = {
  Contect: boolean
  setContect: (value: boolean) => void
}

export const ConContext = createContext<ConContextType>({
  Contect: false,
  setContect: () => {},
})
