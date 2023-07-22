import React from 'react'
import { motion } from 'framer-motion';
import '@fontsource/bebas-neue';
import '@fontsource-variable/space-grotesk';

const HeroMainText = () => {
  return (
    <motion.h1 className='text-[64px] font-bebas text-center z-10'>Hello I'm a dude who does stuff crazy right?</motion.h1>
  )
}

export default HeroMainText;