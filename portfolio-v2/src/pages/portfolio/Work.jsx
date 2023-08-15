import React from 'react'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';


const Work = () => {

    const isDark = useSelector((state) => state.theme.isDark);

    return (
        <div className={`w-screen font-bebas flex flex-col gap-0 text-[30px] md:text-[40px] relative z-[30] ${isDark ? 'bg-[#090909]' : 'bg-[#d6d6d6]'}`}>
            <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }} viewport={{ once: true }} className={`flex flex-col text-[70px] font-bold items-end leading-tight gap-2 w-full p-6 border-t-8 ${isDark ? 'border-[#d6d6d6]' : 'border-[#090909]'}`}>
                <h1>Experience</h1>
            </motion.div>
            <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }} viewport={{ once: true }} className={`flex-col items-start leading-tight gap-2 w-full p-6 border-t-8 ${isDark ? 'border-[#d6d6d6]' : 'border-[#090909]'}`}>
                <h1>Space Universe Africa, Frontend Development Intern</h1>
                <p className='text-[20px] md:text-[25px]'>01/2023 - 06/2023</p>
            </motion.div>
            <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }} viewport={{ once: true }} className={`flex-col items-start leading-tight gap-2 w-full p-6 border-t-8 ${isDark ? 'border-[#d6d6d6]' : 'border-[#090909]'}`}>
                <h1>Radioadspread, Frontend Developer</h1>
                <p className='text-[20px] md:text-[25px]'>01/2023 - 06/2023</p>
            </motion.div>
            <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }} viewport={{ once: true }} className={`flex-col items-start leading-tight gap-2 w-full p-6 border-y-8 ${isDark ? 'border-[#d6d6d6]' : 'border-[#090909]'}`}>
                <h1>Freelance</h1>
                <p className='text-[20px] md:text-[25px]'>01/2022 - present</p>
            </motion.div>

        </div >
    )
}

export default Work