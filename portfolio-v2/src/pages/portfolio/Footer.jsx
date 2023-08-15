import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const selectedAccentColor = useSelector((state)=> state.accent.selectedAccentColor)
  return (
    <div style={{
        backgroundColor: selectedAccentColor
    }} className='w-[80%] self-center relative z-[30] font-bebas text-[15px] md:text-[25px] flex items-center justify-center p-6'>
        <h2 className='w-[80%] text-center text-[#090909]'>Designed in my head,  developed on my crappy laptop,  by Awoyemi Abiola,  Frontend Developer,  Roll credits.</h2>
    </div>
  )
}

export default Footer