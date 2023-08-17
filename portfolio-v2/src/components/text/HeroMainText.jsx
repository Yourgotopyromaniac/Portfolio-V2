import { motion } from 'framer-motion';
import HeroMainTag from '../dynamic/HeroMainTag';
import { useSelector } from 'react-redux';


const HeroMainText = () => {

  const selectedAccentColor = useSelector(
    (state) => state.accent.selectedAccentColor
  );

  return (
    <div className='text-[90px] hero-sm flex flex-col items-start md:items-center justify-center h-full  leading-tight lg:text-[150px] w-[80%] font-bebas font-extrabold text-start md:text-center z-[8]'>
      <div className='relative flex' >
        <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 8.8, type: 'keyframes' }} >I&#39;m Biola,
        </motion.h1>
      </div>

      <div className='relative flex' >
        <div className='flex gap-4'>
          <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 9.3, type: 'keyframes' }} >and I build
          </motion.h1>
        </div>
      </div>

      <div className='relative classname flex h-1/4' >
        <motion.h1 style={{
          color : selectedAccentColor
        }} className='flex' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 9.8, type: 'keyframes' }} ><HeroMainTag />
        </motion.h1>
      </div>


    </div>
  )
}

export default HeroMainText;