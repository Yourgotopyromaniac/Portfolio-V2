import React from 'react'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';


const StackItem = ({ title, items, align, reverse, rotate }) => {

    const selectedAccentColor = useSelector(
        (state) => state.accent.selectedAccentColor
    );

    return (
        <div className={`flex flex-col md:text-[25px] text-[18px] w-full ${align}`}>
            <motion.h1 initial={{ y: 40, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 4 }} viewport={{ once: true }} style={{ color: selectedAccentColor }} className='text-[26px] md:text-[35px]'>{title}</motion.h1>
            {items.map((item, index) => (
                <motion.span
                    className={`flex items-center gap-2 ${reverse}`}
                    initial={{ y: 40, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 4 }} viewport={{ once: true }}
                    key={index}
                >
                    <svg width="8px" height="8px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" transform={`rotate(${rotate})`}>

                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                        <g id="SVGRepo_iconCarrier">

                            <path fill={selectedAccentColor} d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z" />

                        </g>

                    </svg>

                    {item}</motion.span>
            ))}
        </div>
    )
}

export default StackItem