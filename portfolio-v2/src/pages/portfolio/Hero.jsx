import React from 'react'
import HeroMainText from '@/components/HeroMainText'



const Hero = () => {
    return (
        <div className='relative top-0 flex flex-col w-full h-[100vh] items-center justify-center text-[#e6e6e6]'>
            <HeroMainText />
            <div className='absolute bg-[rgba(10,10,10,1)] h-[85%] w-[75%] z-[5]'>
            </div>
        </div>
    )
}

export default Hero