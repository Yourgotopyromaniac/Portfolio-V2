import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const selectedAccentColor = useSelector((state)=> state.accent.selectedAccentColor)
  return (
    <div style={{
        backgroundColor: selectedAccentColor
    }} className='w-[80%] self-center relative z-[30] text-[13px] md:text-[18px] flex items-center justify-center p-6'>
        <p className='w-[90%] text-center text-[#090909]'>This is where footer content would be, if I had footer content</p>
    </div>
  )
}

export default Footer