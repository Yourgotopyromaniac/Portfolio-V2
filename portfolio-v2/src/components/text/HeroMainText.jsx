import { motion, easeInOut } from 'framer-motion';
import HeroMainTag from '../dynamic/HeroMainTag';
import { useSelector } from 'react-redux';

const HeroMainText = () => {

  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className='text-[90px] flex flex-col items-start md:items-center justify-center h-full leading-tight gap-0 md:text-[140px] w-[80%] font-bebas font-medium text-start md:text-center z-[8]'>
      <div className='relative flex' >
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: 0 }}
          transition={{ duration: 0.8, delay: 7, ease: easeInOut }}
          layout
          className={`absolute w-full h-1/2 self-end top-0 origin-left ${isDark? 'bg-[#090909]' : 'bg-[#e6e6e6]'} `}></motion.div>
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: 0 }}
          transition={{ duration: 0.8, delay: 7.2, ease: easeInOut }}
          layout
          className={`absolute w-full h-1/2 self-end bottom-0 origin-left ${isDark? 'bg-[#090909]' : 'bg-[#e6e6e6]'}`} ></motion.div>
        <h1>I&#39;m Biola, </h1>

      </div>
      <div className='relative flex' >
        <motion.div
          initial={{ width: '100%' }}
          animate={{ height: 0 }}
          transition={{ duration: 0.8, delay: 7.2, ease: easeInOut }}
          layout
          className={`absolute w-full h-full origin-top self-end ${isDark? 'bg-[#090909]' : 'bg-[#e6e6e6]'}`}></motion.div>
        <div className='flex gap-4'><h1>and I build</h1> </div></div>

      <div className='relative flex h-1/4' >
        <HeroMainTag /></div>


    </div>
  )
}

export default HeroMainText;