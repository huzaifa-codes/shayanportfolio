'use client'
import React, { useState } from 'react'
import { ConContext, type ConContextType } from './ConContext'

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [Contect, setContect] = useState<boolean>(false)

  const data: ConContextType = {
    Contect,
    setContect
  }

  return (
    <ConContext.Provider value={data}>
      {children}
    </ConContext.Provider>
  )
}

export default ContextProvider
