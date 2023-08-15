import React, { useRef } from 'react'
import HeroMainText from '@/components/text/HeroMainText'
import { motion, useScroll, useTransform } from 'framer-motion'


const Hero = () => {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["end end", "end center"]
    });
    const scrollPacity = useTransform(
        scrollYProgress,
        [0,1],
        [1,0]
    )

    return (
        <motion.div ref={heroRef} style={{ opacity: scrollPacity }} className='top-0 flex flex-col w-full h-[100vh] items-center justify-center'>
            <HeroMainText />
        </motion.div>
    )
}

export default Hero