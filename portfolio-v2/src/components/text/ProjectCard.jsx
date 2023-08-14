import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ProjectCard = ({ imgClass, name, textColor, background, bgColor, border, desc, stack, link }) => {
    return (
        <motion.div style={{ scrollSnapAlign: 'center' }}
            className={`md:h-[90%] md:w-[70%] h-[75%] w-[90%] landscape-short ${background} flex justify-center items-center flex-none mx-40 relative z-[5]`}>
            <div className={`w-[90%] h-[90%] border-2 ${border} relative`}>
                <div className={`absolute z-[1] ${imgClass} w-full h-1/2 top-0 rounded-md`}>
                </div>

                <div className={`w-full h-full absolute z-[5] top-0 ${textColor} bg-gradient-to-t ${bgColor} to-transparent flex flex-col rounded-md justify-end`}>

                    <div className='self-start h-[60%] landscape-tight md:py-2 p-4 px-6 font-bebas flex flex-col justify-center gap-3'>
                        <h1 className='lg:text-[50px] text-[35px] project-header-sm'>{name}</h1>
                        <p className='lg:text-[25px] text-[20px] project-sm'>Built with {stack}</p>
                        <p className='lg:text-[20px] text-[15px]'>{desc}</p>
                        <Link href={link} target='_blank' className='lg:text-[20px] text-[15px]'>Live link</Link>

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard