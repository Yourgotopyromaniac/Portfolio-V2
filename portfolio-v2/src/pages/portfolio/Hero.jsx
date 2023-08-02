import React from 'react'
import HeroMainText from '@/components/text/HeroMainText'
import { motion, useScroll, useTransform } from 'framer-motion'


const Hero = () => {
    const { scrollYProgress } = useScroll();
    const scrollPacity = useTransform(
        scrollYProgress,
        [0,0.5],
        [1,0]
    )


    return (
        <motion.div style={{ opacity: scrollPacity }} className='relative top-0 flex flex-col w-full h-[100vh] items-center justify-center'>
            <HeroMainText />
        </motion.div>
    )
}

export default Hero