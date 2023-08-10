import React, { useRef } from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import '@fontsource-variable/space-grotesk'
import thanos from '@/assets/thanos.gif'
import AboutSlice from '@/components/text/AboutSlice';
import { motion, useScroll, useTransform } from 'framer-motion';



const About = () => {
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["center end", "end center"]
  });

  const scRslow = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100]
  )
  const [isHovered, setIsHovered] = useState(false);

  const HandleHover = () => {
    setIsHovered(!isHovered);
  }


  return (
    <motion.div className='w-full py-40  flex flex-col justify-center items-center'>
      <div className='w-[90%] lg:w-[100%] lg:pl-36 lg:ml-20 flex flex-col justify-center items-start text-start'>

        <h1 className='font-bebas text-[60px] md:text-[90px] mb-5 text-[#ff3e3e] z-10 font-semibold'>Me, Myskills & I</h1>

        <div className='flex flex-col w-[100%] md:w-[100%] uppercase leading-snug font-space font-medium text-[30px] md:text-[50px]'>
          <AboutSlice text="I'm a Frontend Engineer with" />
          <AboutSlice text="4 years of experience" />
          <AboutSlice text="building higly perfomant," />
          <AboutSlice text=" accesible and responsive" />
          <AboutSlice text="web applications with..." />
        </div>

      </div>
      <div className='w-[100%] my-24 z-10 border-t-[10px] border-b-[10px] border-[#ff3e3e]'>
        <Marquee className='font-bebas font-bold text-[55px] md:text-[95px] p-8' speed={200} pauseOnClick play>
          <div className='mr-8'>NextJS</div>
          <div className='mr-8'>·</div>
          <div className='mr-8'>Typescript</div>
          <div className='mr-8'>·</div>
          <div className='mr-8'>React</div>
          <div className='mr-8'>·</div>
          <div className='mr-8'>Redux</div>
          <div className='mr-8'>·</div>
          <div className='mr-8'>Javascript</div>
          <div className='mr-8'>·</div>
          <div className='mr-8'>GraphQL</div>
          <div className='mr-8'>·</div>
          <div className='mr-8'>HTML</div>
          <div className='mr-8'>·</div>
          <div className='mr-8'>CSS</div>
          <div className='mr-8'>·</div>
          <div className='mr-8'>SCSS</div>
          <div className='mr-8'>·</div>
          <div className='mr-8'>Tailwind</div>
          <div className='mr-8'>·</div>
          <div className='mr-8'>Framer</div>
          <div className='mr-8'>·</div>
          <div className='mr-8'>GSAP</div>
          <div className='mr-8'>·</div>
        </Marquee>
      </div>

      <div className='w-[90%] lg:w-[100%] lg:pl-36 lg:ml-20 flex flex-col justify-center items-start text-start'>
        <div className='flex flex-col w-[100%] md:w-[100%] uppercase leading-snug font-space font-medium text-[30px] md:text-[50px]'>

          <AboutSlice text="I have a solid understanding" />
          <AboutSlice text="of frontend design patterns" />
          <AboutSlice text="and best practices, which" />
          <AboutSlice text="I always stay up to date on by" />
          <AboutSlice text="constantly adding new" />
          <AboutSlice text="technologies to my skillset." />
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 3, duration: 0.5 }} onMouseOver={HandleHover} onMouseLeave={HandleHover} className='relative'>kinda like thanos collecting infinity stones.
            <Image src={thanos}
              width={200}
              alt='loop'
              className='absolute bottom-[100%] right-10 lg:right-96 rotate-12 z-10'
            />
          </motion.div>


          <AboutSlice text="I do a little bit of everything" />
          <AboutSlice text="but I currently find my niche in" />
          <AboutSlice text="creating accesible, engaging" />
          <AboutSlice text="and interactive visual experiences." />
        </div>
      </div>

    </motion.div >
  )
}

export default About