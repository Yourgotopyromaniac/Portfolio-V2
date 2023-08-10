import React from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ imgClass, name, textColor, background, bgColor, border, desc, stack }) => {
    return (
        <motion.div style={{ scrollSnapAlign: 'center' }}
            viewport={{ once: true }}
            className={`md:h-[90%] md:w-[70%] h-[75%] w-[90%] ${background} flex justify-center items-center flex-none mx-40 relative z-[5] rounded-md`}>
            <div className={`w-[90%] h-[90%] border-2 ${border} rounded-md relative`}>
                <div className={`absolute z-[1] ${imgClass} w-full h-1/2 top-0 rounded-md`}>
                </div>

                <div className={`w-full h-full absolute z-[5] top-0 ${textColor} bg-gradient-to-t ${bgColor} to-transparent flex flex-col rounded-md justify-end`}>

                    <div className='self-start h-1/2 md:h-auto p-4 px-6 font-bebas flex flex-col'>
                        <h1 className='lg:text-[50px] text-[35px]'>{name}</h1>
                        <p className='lg:text-[25px] text-[20px] mb-4'>Built with {stack}</p>
                        <p className='lg:text-[20px] text-[15px]'>{desc}</p>
                        <p className='lg:text-[20px] mt-8 text-[15px]'>LIVE LINK</p>

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard