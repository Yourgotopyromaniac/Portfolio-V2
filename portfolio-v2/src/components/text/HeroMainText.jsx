import { motion, easeInOut } from 'framer-motion';
import HeroMainTag from '../dynamic/HeroMainTag';
import { useSelector } from 'react-redux';

const HeroMainText = () => {

  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className='text-[90px] flex flex-col items-start md:items-center justify-center h-full  leading-tight gap-0 lg:text-[160px] w-[80%] font-bebas font-extrabold text-start md:text-center z-[8]'>
      <div className='relative flex' >
        <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 6.5 }} >I&#39;m Biola,
        </motion.h1>
      </div>

      <div className='relative flex' >
        <div className='flex gap-4'>
          <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 6.7 }} >and I build
          </motion.h1>
        </div>
      </div>

      <div className='relative classname flex h-1/4' >
        <motion.h1 className=' text-[#ff4040]' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 6.9 }} ><HeroMainTag/>
        </motion.h1>
      </div>


    </div>
  )
}

export default HeroMainText;