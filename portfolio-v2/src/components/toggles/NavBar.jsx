import { useState } from 'react'
import { motion } from 'framer-motion'
import AccentSwitch from './AccentSwitch';
import { useSelector } from 'react-redux';

const NavBar = () => {
  
  const selectedAccentColor = useSelector(
    (state) => state.accent.selectedAccentColor
  );

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    const variants = {

        open: {
          x: 0
        },
    
        closed: {
          x: "-100vw"
        },
    
        open2: {
          x: 0
        },
    
        closed2: {
          x: "100vw"
        }
      }
      
    return (
        <>
            <nav className='fixed z-[30] top-14 right-8'>
                <div onClick={handleToggle} className='flex flex-col gap-2'>
                    <span style={{ borderColor : selectedAccentColor }} className={`menu-bar ${isOpen ? 'rotate-45' : ''}`} ></span>
                    <span style={{ borderColor : selectedAccentColor }} className={`menu-bar ${isOpen ? '-rotate-45  translate-y-[-14px] ' : ''}`}></span>
                </div>
            </nav>

            <motion.div variants={variants} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.2, delay: 0 }} className='bg-[#090909] fixed z-[29] top-0 h-[25vh] w-full '></motion.div>
            <motion.div variants={variants} initial="closed2" animate={isOpen ? "open2" : "closed2"} transition={{ duration: 0.2, delay: 0.1 }} className='bg-[#090909] fixed z-[29] top-[25vh] h-[25vh] w-full'></motion.div>
            <motion.div variants={variants} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.2, delay: 0.2 }} className='bg-[#090909] fixed z-[29] top-[50vh] h-[25vh] w-full'></motion.div>
            <motion.div variants={variants} initial="closed2" animate={isOpen ? "open2" : "closed2"} transition={{ duration: 0.2, delay: 0.3 }} className='bg-[#090909] fixed z-[29] top-[75vh] h-[25vh] w-full'>
            <AccentSwitch/>
            </motion.div></>
    )
}

export default NavBar