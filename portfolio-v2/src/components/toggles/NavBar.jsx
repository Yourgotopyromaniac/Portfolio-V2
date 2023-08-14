import { useState } from 'react'
import { easeInOut, motion } from 'framer-motion'
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
      <div className='flex flex-col fixed z-[35] top-14 right-8 items-end gap-8'>
        <nav className=''>
          <div onClick={handleToggle} className='flex flex-col gap-2'>
            <span style={{ borderColor: selectedAccentColor }} className={`menu-bar ${isOpen ? 'rotate-45' : ''}`} ></span>
            <span style={{ borderColor: selectedAccentColor }} className={`menu-bar ${isOpen ? '-rotate-45  translate-y-[-14px] ' : ''}`}></span>
          </div>
        </nav>
        <div className='flex flex-col items-start w-[1px] h-[150px] bg-[#181818]'>
          <motion.div 
          animate={{
            scaleY: [0.1, 0.6, 0.4, 0.2, 0.1],
            y: [0, 50, 40, 80, 0]
          }} 
          transition={{
            duration : 4,
            ease: easeInOut, 
            times: [0, 0.4, 0.6, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
          style={{ backgroundColor: selectedAccentColor }} className='w-full h-full origin-top'></motion.div>
        </div>
      </div>


      <motion.div variants={variants} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.2, delay: 0 }} className='bg-[#090909] fixed z-[30] top-0 h-[25vh] w-full '></motion.div>
      <motion.div variants={variants} initial="closed2" animate={isOpen ? "open2" : "closed2"} transition={{ duration: 0.2, delay: 0.1 }} className='bg-[#090909] fixed z-[30] top-[25vh] h-[25vh] w-full'></motion.div>
      <motion.div variants={variants} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.2, delay: 0.2 }} className='bg-[#090909] fixed z-[30] top-[50vh] h-[25vh] w-full'></motion.div>
      <motion.div variants={variants} initial="closed2" animate={isOpen ? "open2" : "closed2"} transition={{ duration: 0.2, delay: 0.3 }} className='bg-[#090909] fixed z-[30] top-[75vh] h-[25vh] w-full'>
        <AccentSwitch />
      </motion.div></>
  )
}

export default NavBar