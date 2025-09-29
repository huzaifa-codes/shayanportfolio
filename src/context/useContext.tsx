'use client'
import React, { useState } from 'react'
import { ConContext } from './ConContext'

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [Contect, setContect] = useState(false)

  return (
    <ConContext.Provider value={{ Contect, setContect }}>
      {children}
    </ConContext.Provider>
  )
}

export default ContextProvider
