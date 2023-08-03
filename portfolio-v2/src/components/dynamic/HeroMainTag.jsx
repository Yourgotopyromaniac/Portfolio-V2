import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from "react-redux";

const HeroMainTag = () => {

  const TagTexts = ["websites", "webapps", "web interfaces", "web-anything", "web-everything"]
  const [tagIndex, setTagIndex] = useState(0);
  const order = [0, 1, 2, 3, 4];
  let tagDelay;
  let tagInterval;
  const isDark = useSelector((state) => state.theme.isDark);


  useEffect(() => {
    tagDelay = setTimeout(() => {
      tagInterval = setInterval(() => {
        setTagIndex((prevIndex) => {
          const nextIndex = (order.indexOf(prevIndex) + 1) % order.length;
          return order[nextIndex];
        });
      }, 3000);
    }, 6000);

    return () => {
      clearTimeout(tagDelay);
      clearInterval(tagInterval);
    };

  }, [])

  const tagText = TagTexts[tagIndex];




  return (
    <div className='relative'>
      <div className='absolute z-10 left-0 top-0 grid grid-cols-4 gap-0 w-full h-full'>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8 }}
          className={`${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.3 }}
          className={`${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.7 }}
          className={`${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.1 }}
          className={`${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.4 }}
          className={`${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.2 }}
          className={`${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.5 }}
          className={`${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.6 }}
          className={`${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
      </div>
      <motion.h1 className='text-[#ff4040]'>{tagText}</motion.h1>
    </div>
  )
}

export default HeroMainTag