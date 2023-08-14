import React, { useRef } from 'react'
import HeroMainText from '@/components/text/HeroMainText'
import { useSelector } from 'react-redux'


const Hero = () => {
    
    const isDark = useSelector((state) => state.theme.isDark);

    return (
        <div className={`relative top-0 flex flex-col w-full h-[100vh] flex-none z-[15] items-center justify-center ${isDark ? 'bg-[#090909]' : 'bg-[#d6d6d6]'}`}>
            <HeroMainText />
        </div>
    )
}

export default Hero