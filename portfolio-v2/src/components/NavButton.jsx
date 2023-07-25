import React, { useState } from 'react'
import { motion } from 'framer-motion'

const NavButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <nav className='fixed z-10 top-14 right-8'>
            <div onClick={handleToggle} className='flex flex-col gap-2'>
                <motion.span className='nav-dot origin-top '></motion.span>
                <motion.span className='nav-dot origin-top '></motion.span>
            </div>
        </nav>
    )
}

export default NavButton