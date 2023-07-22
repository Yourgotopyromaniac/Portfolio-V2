import React from 'react'
import LoadingBar from './LoadingBar'
import {motion} from 'framer-motion'
import '@fontsource/bebas-neue';

const LoadingScreen = () => {
  return (
    <div className='absolute z-20 top-0 left-0'>
    <motion.div
    animate={{display: 'none'}}
    transition={{delay: 7.5}}
    className='bg-[#101010] h-[100vh] w-[100vw] flex flex-col py-0 px-0 font-bold justify-center relative'>
      <LoadingBar/>
    </motion.div>
    </div>
  )
}

export default LoadingScreen