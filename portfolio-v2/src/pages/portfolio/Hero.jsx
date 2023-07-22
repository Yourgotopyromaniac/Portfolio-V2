import React from 'react'
import HeroMainText from '@/components/HeroMainText'
import Image from 'next/image'
import bgImage from '@/assets/bgimg.png'



const Hero = () => {
    return (
        <div className='flex flex-col w-full h-[100vh] items-center justify-center text-[#e6e6e6] relative '>
            <HeroMainText />
            <div className='absolute bg-[rgba(10,10,10,1)] h-[95%] w-[95%] z-6'>
            </div>
        </div>
    )
}

export default Hero