import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';

const ScrollTextMask = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  return (
    <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true}} className={`absolute h-full top-0 left-0 ${isDark ? 'bg-[rgba(9,9,9,0.5)]' : 'bg-[#d6d6d6]'}`}></motion.div>
  )
}

export default ScrollTextMask