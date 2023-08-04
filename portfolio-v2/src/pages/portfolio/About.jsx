import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import ScrollTextMask from '@/components/masks/ScrollTextMask';
import Marquee from 'react-fast-marquee';
import '@fontsource-variable/space-grotesk'
import thanos from '@/assets/thanos.gif'



const About = () => {


  const [isHovered, setIsHovered] = useState(false);

  const HandleHover = () => {
    setIsHovered(!isHovered);
  }


  return (
    <div className='w-full py-40 flex flex-col justify-center items-center'>
      <div className='w-[90%] md:w-[100%] md:pl-36 md:ml-20 flex flex-col justify-center items-start text-start'>
        <h1 className='font-bebas text-[50px] md:text-[80px] mb-5 text-[#ff4040] font-semibold'>Me, Myskills & I</h1>
        <div className='flex flex-col w-[100%] md:w-[100%] uppercase leading-snug font-space font-medium text-[30px] md:text-[50px]'>
          <div className='relative'>I&#39;m a frontend engineer with
            <ScrollTextMask />
          </div>
          <div className='relative'>3 years of experience
            <ScrollTextMask />
          </div>
          <div className='relative'>building higly perfomant,
            <ScrollTextMask />
          </div>
          <div className='relative'> accesible and responsive web
            <ScrollTextMask />
          </div>
          <div className='relative'>applications with...
            <ScrollTextMask />
          </div>
        </div>
      </div>

      <div className='w-[100%] my-24 border-t-[8px] border-b-[8px] border-[#ff4040]'>
        <Marquee className='font-bebas font-bold text-[45px] md:text-[75px] p-8' speed={120} pauseOnClick play>
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

      <div className='w-[90%] md:w-[100%] md:pl-36 md:ml-20 flex flex-col justify-center items-start text-start'>
        <div className='flex flex-col w-[100%] md:w-[100%] uppercase leading-snug font-space font-medium text-[30px] md:text-[50px]'>
          <div className='relative'>and a lot more!
            <ScrollTextMask />
          </div>
          <div className='relative mt-10'> I have a solid understanding
            <ScrollTextMask />
          </div>
          <div className='relative'>of frontend design patterns
            <ScrollTextMask />
          </div>
          <div className='relative'>and best practices, which
            <ScrollTextMask />
          </div>

          <div className='relative'>I always stay up to date on by
            <ScrollTextMask />
          </div>

          <div className='relative'>constantly adding new 
            <ScrollTextMask />
          </div>

          <div className='relative'>technologies to my skillset.
            <ScrollTextMask />
          </div>

          <div onMouseOver={HandleHover} onMouseLeave={HandleHover} className='relative'>kinda like thanos collecting infinity stones.
            <ScrollTextMask />
            {isHovered && (
              <Image src={thanos}
                width={200}
                alt='loop'
                className='absolute bottom-[100%] right-96 rotate-12 z-10'
              />
            )}
          </div>


          <div className='relative mt-10'>I do a little bit of everything
            <ScrollTextMask />
          </div>

          <div className='relative'>but I currently find my niche in
            <ScrollTextMask />
          </div>

          <div className='relative'> creating accesible, engaging
            <ScrollTextMask />
          </div>

          <div className='relative'>and interactive visual experiences.
            <ScrollTextMask />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About