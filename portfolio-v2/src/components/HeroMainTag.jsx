import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

const HeroMainTag = () => {

  const TagTexts = ["websites", "webapps", "web interfaces", "web-anything", "web-everything"]
  const [tagIndex, setTagIndex] = useState(0);
  const order = [0, 1, 2, 3, 4];
  let tagDelay;
  let tagInterval;
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  const handleTheme = () => {
    dispatch(toggleTheme());
    console.log(isDark);
  }

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
          className={` transition-all duration-500 ease-in-out ${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.3 }}
          className={` transition-all duration-500 ease-in-out ${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.7 }}
          className={` transition-all duration-500 ease-in-out ${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.1 }}
          className={` transition-all duration-500 ease-in-out ${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.4 }}
          className={` transition-all duration-500 ease-in-out ${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.2 }}
          className={` transition-all duration-500 ease-in-out ${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.5 }}
          className={` transition-all duration-500 ease-in-out ${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: 8.6 }}
          className={` transition-all duration-500 ease-in-out ${isDark ? 'bg-[#090909]' : 'bg-[#e4e4e4]'}`}>
        </motion.div>
      </div>
      <motion.span className='text-[#ff3333]'>{tagText}</motion.span>
    </div>
  )
}

export default HeroMainTag