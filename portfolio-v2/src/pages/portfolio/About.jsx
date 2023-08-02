import React from 'react'
import { useSelector } from 'react-redux';
import { useScroll, motion, useTransform } from 'framer-motion'
import '@fontsource-variable/space-grotesk'


const About = () => {

  const isDark = useSelector((state) => state.theme.isDark);
  const { scrollYProgress } = useScroll();
  const scrWidth = useTransform(
    scrollYProgress, 
    [0,1],
    ['100%', '0%']
  ) 
  const scrWidth2 = useTransform(
    scrollYProgress, 
    [0,1],
    ['200%', '0%']
  ) 
  const scrWidth3 = useTransform(
    scrollYProgress, 
    [0,1],
    ['300%', '0%']
  ) 

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[80%] md:ml-40 flex flex-col justify-center items-start text-start'>
        <h1 className='font-bebas text-[60px] md:text-[80px] mb-5 text-[#ff4040] font-semibold'>About Me</h1>
        <div className='flex flex-col w-[100%] md:w-[80%] uppercase leading-snug font-space font-extrabold text-[40px] md:text-[60px]'>
          <div className='relative'>I&#39;m a frontend developer
            <motion.div style={{ width: scrWidth }} className={`absolute h-full transition-all duration-500 top-0 right-0 ${ isDark? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>
          <div className='relative'> doloremque labore molestiae,
          <motion.div style={{ width: scrWidth2 }} className={`absolute h-full transition-all duration-500 top-0 right-0 ${ isDark? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>
          <div className='relative'> iusto maiores hic porro sint.
          <motion.div style={{ width: scrWidth3 }} className={`absolute h-full transition-all duration-500 top-0 right-0 ${ isDark? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About