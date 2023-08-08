import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='relative w-screen h-[100vh] flex justify-center items-center'>
      <div className='absolute rotate-90 w-[120vh] text-[20rem] md:rotate-0 md:w-full leading-[0] font-bebas font-extrabold md:text-[25rem] flex gap-2'>
        <span className='w-[12.5%]'>P</span>
        <span className='w-[12.5%]'>R</span>
        <span className='w-[12.5%]'>O</span>
        <span className='w-[12.5%]'>J</span>
        <span className='w-[12.5%]'>E</span>
        <span className='w-[12.5%]'>C</span>
        <span className='w-[12.5%]'>T</span>
        <span className='w-[12.5%]'>S</span>
      </div>

      <motion.div
        style={{ scrollSnapType: 'x mandatory'}}
        initial={{ width: 0}}
        whileInView={{ width: '90%' }}
        transition={{ duration: 0.5, delay: 1.5, type: 'keyframes' }}
        className='border-4 backdrop projects border-[#ff4040] origin-center flex h-[90%] w-0 flex-nowrap items-center gap-28 overflow-x-scroll z-10'>


        <div
          style={{ scrollSnapAlign: 'center' }}
          className='md:h-[95%] md:w-[70%] h-[75%] w-[90%] bg-black flex-none mx-10'></div>

        <div
          style={{ scrollSnapAlign: 'center' }}
          className='md:h-[95%] md:w-[70%] h-[75%] w-[90%]  bg-black flex-none mx-10'></div>

        <div
          style={{ scrollSnapAlign: 'center' }}
          className='md:h-[95%] md:w-[70%] h-[75%] w-[90%] bg-black flex-none mx-10'></div>

        <div
          style={{ scrollSnapAlign: 'center' }}
          className='md:h-[95%] md:w-[70%] h-[75%] w-[90%] bg-black flex-none mx-10'></div>



      </motion.div>
    </div>
  )
}

export default Projects