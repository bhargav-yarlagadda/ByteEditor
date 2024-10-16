import React from 'react'
import Logo from '../../assets/logo-grayscale.svg';
const PlaygroundContainer = ({children}) => {
  return (
    <div style={{scrollbarWidth:"none"}} className="w-screen overflow-scroll h-screen bg-gray-100 bg-opacity-80">
      {/* Header */}
      <div className="w-full  flex items-center justify-between py-4 px-6 bg-gray-950">
        <img
          src={Logo}
          alt="Byte Folio Logo"
          className="rounded-full w-16 h-16 border-2 border-gray-100"
        />
        <span className="text-2xl text-white font-semibold font-mono">Byte Editor</span>
      </div>
    {
        children
    }
     
    </div>
  )
}

export default PlaygroundContainer