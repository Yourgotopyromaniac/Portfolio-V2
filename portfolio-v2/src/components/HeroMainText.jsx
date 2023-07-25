import { motion, easeInOut } from 'framer-motion';
import '@fontsource/bebas-neue';
import HeroMainTag from './HeroMainTag';

const HeroMainText = () => {

  return (
    <div className='text-[90px] flex flex-col items-start md:items-center justify-center h-full leading-tight gap-0 md:text-[120px] w-[70%] font-bebas text-start md:text-center z-[8]'>
      <div className='relative flex' >
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: 0 }}
          transition={{ duration: 0.8, delay: 7, ease: easeInOut }}
          layout
          className='absolute w-full h-1/2 self-end top-0 origin-left bg-[#090909] mix-blend-multiply'></motion.div>
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: 0 }}
          transition={{ duration: 0.8, delay: 7.2, ease: easeInOut }}
          layout
          className='absolute w-full h-1/2 self-end bottom-0 origin-left bg-[#090909]'></motion.div>
        <h1>I&#39;m Biola, </h1>

      </div>
      <div className='relative flex' >
        <motion.div
          initial={{ width: '100%' }}
          animate={{ height: 0 }}
          transition={{ duration: 0.8, delay: 7.2, ease: easeInOut }}
          layout
          className='absolute w-full h-full origin-top self-end bg-[#090909] mix-blend-multiply'></motion.div>
        <div className='flex gap-4'><span>and I build</span> </div></div>

      <div className='relative flex h-1/4' >
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: 0 }}
          transition={{ duration: 0.8, delay: 7.2, ease: easeInOut }}
          layout
          className='absolute origin-left right-0 bottom-0 h-1/2 bg-[#090909]'></motion.div>
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: 0 }}
          transition={{ duration: 0.8, delay: 7.4, ease: easeInOut }}
          layout
          className='absolute origin-left right-0 top-0 h-1/2 bg-[#090909]'></motion.div>

        <HeroMainTag /></div>


    </div>
  )
}

export default HeroMainText;