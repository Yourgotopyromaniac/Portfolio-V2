import React from 'react'
import { motion } from 'framer-motion';
import '@fontsource/bebas-neue';
import '@fontsource-variable/space-grotesk';

const HeroMainText = () => {
  return (
    <motion.h1 className='text-[64px] md:text-[120px] w-[70%] leading-tight font-bebas text-center z-[8]'>I&#39;m Biola and I can build <span className='text-red-500'>anything</span> with <span className='text-red-500'>anything</span> </motion.h1>
  )
}

export default HeroMainText;