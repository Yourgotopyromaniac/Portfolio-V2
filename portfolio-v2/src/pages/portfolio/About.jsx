import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import '@fontsource-variable/space-grotesk'
import thanos from '@/assets/thanos.gif'
import AboutSlice from '@/components/text/AboutSlice';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';


const About = () => {
  const selectedAccentColor = useSelector(
    (state) => state.accent.selectedAccentColor
  );
  const isDark = useSelector((state) => state.theme.isDark);

  const [isHovered, setIsHovered] = useState(false);

  const HandleHover = () => {
    setIsHovered(!isHovered);
  }


  return (
    <div style={{ scrollSnapAlign: 'center' }} className={`w-full relative py-20 z-[15] flex flex-col ${isDark ? 'bg-[#090909]' : 'bg-[#d6d6d6]'} justify-center items-center flex-none`}>
      <div className='w-[90%] lg:w-[90%] lg:pl-16 lg:ml-8 flex flex-col justify-center items-start text-start relative'>

        <h1 style={{ color: selectedAccentColor }} className='font-bebas text-[60px] lg:text-[90px] mb-5 header-sm z-10 font-semibold'>Me, Myskills & I</h1>

        <div className='flex flex-col w-[90%] md:w-[90%] about-sm uppercase leading-snug font-bebas font-medium text-[30px] lg:text-[50px]'>
          <AboutSlice text="I'm a Frontend Engineer with 4 years of experience" />
          <AboutSlice text="building higly perfomant, accesible and responsive" />
          <AboutSlice text="web applications." />
          <br/>
        </div>

      </div>
      

      <div className='w-[90%] lg:w-[90%] lg:pl-16 lg:ml-8 flex flex-col justify-center items-start text-start'>
        <div className='flex flex-col w-[100%] md:w-[100%] about-sm uppercase leading-snug font-bebas font-medium text-[30px] lg:text-[50px]'>

          <AboutSlice text="I have a solid understanding of frontend design patterns" />
          <AboutSlice text="and best practices, which I always stay up to date on by" />
          <AboutSlice text="constantly adding new technologies to my skillset." />
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} viewport={{once: true}} onMouseOver={HandleHover} onMouseLeave={HandleHover} className='relative'>kinda like thanos collecting infinity stones.
            <Image src={thanos}
              width={150}
              alt='loop'
              className='absolute bottom-[100%] w-[100px] lg:w-[150px] right-0 lg:right-20 rotate-12 z-10'
            />
          </motion.div>
          <br/>

          <AboutSlice text="I do a little bit of everything but I currently find my niche in" />
          <AboutSlice text="creating accesible, engaging and interactive visual experiences." />
        </div>
      </div>

    </div >
  )
}

export default About