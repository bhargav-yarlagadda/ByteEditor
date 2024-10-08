import React from 'react'
import { createContext } from 'react'

export const PlaygroundContextProvider = createContext()

const PlaygroundContext = ({children}) => {
  return (
   <PlaygroundContext.Provider  >
    {
        children
    }
   </PlaygroundContext.Provider>
  )
}

export default PlaygroundContext