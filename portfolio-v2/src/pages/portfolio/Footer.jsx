import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const selectedAccentColor = useSelector((state)=> state.accent.selectedAccentColor)
  return (
    <div style={{
        backgroundColor: selectedAccentColor
    }} className='w-[80%] self-center relative z-[30] text-[15px] md:text-[25px] flex items-center justify-center p-6'>
        <h2 className='w-[90%] text-center text-[#090909]'>This is where footer content would be, if I had footer content</h2>
    </div>
  )
}

export default Footer