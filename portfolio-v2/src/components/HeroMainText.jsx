import { motion, easeInOut } from 'framer-motion';
import '@fontsource/bebas-neue';
import HeroMainTag from './HeroMainTag';

const HeroMainText = () => {

  return (
    <div className='text-[52px] flex flex-col items-center justify-center leading-tight gap-0 md:text-[120px] w-[70%] font-bebas text-center z-[8]'>
      <div className='relative flex' >
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: 0 }}
          transition={{ duration: 0.8, delay: 7, ease: easeInOut }}
          layout
          className='absolute w-full h-1/2 self-end top-0 origin-left bg-[#0a0a0a] mix-blend-multiply'></motion.div>
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: 0 }}
          transition={{ duration: 0.8, delay: 7.2, ease: easeInOut }}
          layout
          className='absolute w-full h-1/2 self-end bottom-0 origin-left bg-[#0a0a0a]'></motion.div>
        <h1>I&#39;m Biola and I </h1>

      </div>
      <div className='relative flex' >
        <motion.div
          initial={{ width: '100%' }}
          animate={{ height: 0 }}
          transition={{ duration: 0.8, delay: 7.2, ease: easeInOut }}
          layout
          className='absolute w-full h-full origin-top self-end bg-[#0a0a0a] mix-blend-multiply'></motion.div>
        <div className='flex gap-4'><span>build</span> <HeroMainTag /> </div></div>

      <div className='relative flex' >
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: 0 }}
          transition={{ duration: 0.8, delay: 7.2, ease: easeInOut }}
          layout
          className='absolute origin-left right-0 bottom-0 h-1/2 bg-[#0a0a0a]'></motion.div>
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: 0 }}
          transition={{ duration: 0.8, delay: 7.4, ease: easeInOut }}
          layout
          className='absolute origin-left right-0 top-0 h-1/2 bg-[#0a0a0a]'></motion.div>

        <h1>with <span className='text-red-500'>NextJS</span></h1></div>


    </div>
  )
}

export default HeroMainText;