import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee';
import '@fontsource-variable/space-grotesk'
import thanos from '@/assets/thanos.gif'



const About = () => {

  const isDark = useSelector((state) => state.theme.isDark);
  const [isHovered, setIsHovered] = useState(false);

  const HandleHover = () => {
    setIsHovered(!isHovered);
  }


  return (
    <div className='w-full py-40 flex flex-col justify-center items-center'>
      <div className='w-[80%] md:ml-20 flex flex-col justify-center items-start text-start'>
        <h1 className='font-bebas text-[50px] md:text-[70px] mb-5 text-[#ff4040] font-semibold'>Me, Myskills & I</h1>
        <div className='flex flex-col w-[100%] md:w-[100%] uppercase leading-snug font-space font-semibold text-[30px] md:text-[50px]'>
          <div className='relative'>I&#39;m a frontend engineer with
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>
          <div className='relative'>3 years of experience
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>
          <div className='relative'>building higly perfomant,
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>
          <div className='relative'> accesible and responsive web 
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>
          <div className='relative'>applications with...
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>
        </div>
      </div>

      <div className='w-[80%] my-24 border-t-[8px] border-b-[8px] border-[#ff4040]'>
        <Marquee className='font-bebas font-bold text-[40px] md:text-[70px] p-5' speed={150} pauseOnClick play>
          <div className='mr-8'>NextJS</div>
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

      <div className='w-[80%] md:ml-20 flex flex-col justify-center items-start text-start'>
        <div className='flex flex-col w-[100%] md:w-[100%] uppercase leading-snug font-space font-semibold text-[30px] md:text-[50px]'>
          <div className='relative'>and a lot more!
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>
          <div className='relative mt-10'> I have a solid understanding
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>
          <div className='relative'>of frontend design patterns
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>
          <div className='relative'>and best practices.
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>
          <div className='relative mt-10'>I do a little bit of everything
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>

          <div className='relative'>but I currently find my niche in
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>

          <div className='relative'> creating engaging and interactive visual experiences.
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>

          <div  onMouseOver={HandleHover} onMouseLeave={HandleHover}  className='relative mt-10'>so like Thanos collecting infinty
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
            {isHovered && (
              <Image src={thanos}
                width={200}
                height={150}
                alt='loop'
                className='absolute bottom-[100%] right-96 rotate-12 z-10'
              />
            )}
          </div>

          <div className='relative'>stones, I&#39;m constantly adding
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>

          <div className='relative'>animation frameworks to my repertoire.
            <motion.div initial={{ width: '100%' }} whileInView={{ width: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={`absolute h-full top-0 right-0 ${isDark ? 'bg-[rgba(9,9,9,0.95)]' : 'bg-[rgba(230,230,230,0.95)]'}`}></motion.div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About