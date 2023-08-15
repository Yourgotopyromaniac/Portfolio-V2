import React from 'react'
import { motion } from 'framer-motion'

const AboutSlice = ({text}) => {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, type: 'keyframes' }} viewport={{once: true}} className='relative'>{text}
    </motion.div>
  )
}

export default AboutSlice