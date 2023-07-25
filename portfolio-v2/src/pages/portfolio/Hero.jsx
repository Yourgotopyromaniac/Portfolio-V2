import React from 'react'
import HeroMainText from '@/components/HeroMainText'





const Hero = () => {
    return (
        <div className='relative top-0 flex flex-col w-full h-[100vh] items-center justify-center'>
            <HeroMainText />
            <div className='absolute bg-[#090909] h-[90%] w-[95%] md:h-[85%] md:w-[80%] z-[5]'>
            </div>
        </div>
    )
}

export default Hero