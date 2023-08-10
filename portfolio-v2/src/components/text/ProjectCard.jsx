import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ProjectCard = ({ imgClass, name, textColor, background, bgColor, border, desc, stack, link }) => {
    return (
        <motion.div style={{ scrollSnapAlign: 'center' }}
            className={`md:h-[90%] md:w-[70%] h-[75%] w-[90%] ${background} flex justify-center items-center flex-none mx-40 relative z-[5] rounded-md`}>
            <div className={`w-[90%] h-[90%] border-2 ${border} rounded-md relative`}>
                <div className={`absolute z-[1] ${imgClass} w-full h-1/2 top-0 rounded-md`}>
                </div>

                <div className={`w-full h-full absolute z-[5] top-0 ${textColor} bg-gradient-to-t ${bgColor} to-transparent flex flex-col rounded-md justify-end`}>

                    <div className='self-start h-1/2 md:h-auto lg:h-1/2 md:py-2 p-4 px-6 font-bebas justify-between flex flex-col'>
                        <h1 className='lg:text-[50px] text-[35px]'>{name}</h1>
                        <p className='lg:text-[25px] text-[20px] '>Built with {stack}</p>
                        <p className='lg:text-[20px] text-[15px]'>{desc}</p>
                        <Link href={link} target='_blank' className='lg:text-[20px] text-[15px]'>Live link</Link>

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard