import React from 'react'
import Marquee from 'react-fast-marquee'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Image from 'next/image'
import arrow from '@/assets/arrow.svg'
import ContactLink from '@/components/text/ContactLink'

const Contact = () => {
  const selectedAccentColor = useSelector(
    (state) => state.accent.selectedAccentColor
  );


  return (
    <div id='contact' className='w-screen flex items-center justify-center relative z-30'>
      <div className='flex flex-col w-[90%] items-center h-full gap-28'>
        <div className='flex flex-col items-center gap-10 w-full'>
          <div style={{ backgroundColor: selectedAccentColor }} className='w-[120%] py-6 rotate-[8deg] relative top-60 z-[6] border-y-2 border-[#090909]'>
            <Marquee className='md:text-[70px] text-[50px] py-2 leading-tight w-full font-bold border-t-8 border-b-8 border-[#090909] text-[#090909]'>
              <h1 className='mr-16'>contact me</h1>
              <h1 className='mr-16'>&#47;&#47;&#47;</h1>
              <h1 className='mr-16'>contact me</h1>
              <h1 className='mr-16'>&#47;&#47;&#47;</h1>
              <h1 className='mr-16'>contact me</h1>
              <h1 className='mr-16'>&#47;&#47;&#47;</h1>
              <h1 className='mr-16'>contact me</h1>
              <h1 className='mr-16'>&#47;&#47;&#47;</h1>
              <h1 className='mr-16 '>contact me</h1>
              <h1 className='mr-16'>&#47;&#47;&#47;</h1>
              <h1 className='mr-16'>contact me</h1>
              <h1 className='mr-16'>&#47;&#47;&#47;</h1>
            </Marquee>
          </div>

          <div style={{ backgroundColor: selectedAccentColor }} className='w-[120%] py-6 -rotate-[8deg] z-[5] border-y-2 border-[#090909]'>
            <Marquee className='md:text-[70px] text-[50px] py-2 leading-tightw-full font-bold border-t-8 border-b-8 border-[#090909] text-[#090909]' direction='right'>
              <h1 className='mr-16'>open to work</h1>
              <h1 className='mr-16'>&#47;&#47;&#47;</h1>
              <h1 className='mr-16'>open to work</h1>
              <h1 className='mr-16'>&#47;&#47;&#47;</h1>
              <h1 className='mr-16'>open to work</h1>
              <h1 className='mr-16'>&#47;&#47;&#47;</h1>
              <h1 className='mr-16'>open to work</h1>
              <h1 className='mr-16'>&#47;&#47;&#47;</h1>
              <h1 className='mr-16 '>open to work</h1>
              <h1 className='mr-16'>&#47;&#47;&#47;</h1>
              <h1 className='mr-16'>open to work</h1>
              <h1 className='mr-16'>&#47;&#47;&#47;</h1>
            </Marquee>
          </div>

        </div>

        <div className='flex flex-col w-[90%] leading-tight'>
          <h1 className='text-[90px] font-bold relative flex items-center gap-6'>You can reach me via
            <motion.div initial={{ rotate: 0}} whileInView={{rotate: 135}} transition={{ duration: 0.5, delay: 0.5, type: 'spring'}} style={{ backgroundColor: selectedAccentColor }} className='w-[80px] absolute bottom-0 right-0 h-[80px] md:relative flex items-center justify-center border-2 border-[#090909] rounded-[50%]'>
              <Image src={arrow} height={60} width={60} alt='arrow' />
            </motion.div></h1>
          <div className='flex flex-wrap w-full text-[40px] md:text-[50px]'>
              <ContactLink url='https://twitter.com/Biola_E' title='X'/>
              <ContactLink url='https://www.linkedin.com/in/abiola-awoyemi-a908b51aa/' title='linkedin'/>
              <ContactLink url='mailto:cipherx809@gmail.com' title='Email'/>
              <ContactLink url='https://github.com/Yourgotopyromaniac' title='Github'/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact