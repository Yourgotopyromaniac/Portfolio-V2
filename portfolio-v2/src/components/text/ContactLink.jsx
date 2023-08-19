import React, {useState} from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const ContactLink = ({ title, url }) => {


    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true)
    }

    const handleLeave = () => {
        setIsHovered(false)
    };

    const selectedAccentColor = useSelector((state) => state.accent.selectedAccentColor)
    return (
        <div className='flex md:w-1/2 gap-1 py-10 items-center relative'>
            <svg width="10px" height="10px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" transform='rotate(90)'>

                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                <g id="SVGRepo_iconCarrier">

                    <path fill={selectedAccentColor} d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z" />

                </g>

            </svg>
            <Link target='_blank' onMouseEnter={handleHover} onMouseLeave={handleLeave} className={`relative transition-all p-2 pb-0 md:pr-8 pr-6 duration-200 ${isHovered ? 'text-[#090909]' : ''}`} href={url}>
                <span className='relative z-10 font-semibold items-center'>{title}
                </span>
                <motion.div style={{ backgroundColor: selectedAccentColor }} className={`absolute bottom-0 left-0 origin-center z-[1] transition-all duration-200 h-full ${isHovered ? 'scale-y-100' : 'scale-y-0'} w-full`}></motion.div>
            </Link>
        </div>
    )
}

export default ContactLink