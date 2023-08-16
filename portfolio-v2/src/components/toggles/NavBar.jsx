import { useState } from 'react'
import { easeInOut, motion } from 'framer-motion'
import AccentSwitch from './AccentSwitch';
import { useSelector } from 'react-redux';
import Link from 'next/link';

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
    },
    open3: {
      opacity : 1,
      y: 0
    },

    closed3: {
      opacity : 0,
      y: '25vh'
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
              duration: 4,
              ease: easeInOut,
              times: [0, 0.4, 0.6, 0.9, 1],
              repeat: Infinity,
              repeatDelay: 0,
            }}
            style={{ backgroundColor: selectedAccentColor }} className='w-full h-full origin-top'></motion.div>
        </div>
      </div>


      <motion.div style={{borderColor: selectedAccentColor}} variants={variants} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.2, delay: 0.2 }} className='bg-[#090909] transition-all border-b fixed z-[31] top-0 h-[25vh] w-full flex items-center justify-center'>
        <motion.div variants={variants} initial="closed3" animate={isOpen ? "open3" : "closed3"} transition={{ duration: 0.5, delay: 1, type:"keyframes" }}  className='w-[70%] flex justify-start items-center'>
          <Link onClick={handleToggle} href={'#home'}><h1 className='md:text-[100px] text-[#d6d6d6] text-[80px] font-extrabold'>Home</h1></Link>
        </motion.div>
      </motion.div>

      <motion.div style={{borderColor: selectedAccentColor}} variants={variants} initial="closed2" animate={isOpen ? "open2" : "closed2"} transition={{ duration: 0.2, delay: 0.4 }} className='fixed bg-[#090909] transition-all border-b z-[31] top-[25vh] h-[25vh] w-full flex items-center justify-center'>
        <motion.div variants={variants} initial="closed3" animate={isOpen ? "open3" : "closed3"} transition={{ duration: 0.5, delay: 1.1, type:"keyframes" }} className='w-[70%] flex justify-start items-center'>
          <Link onClick={handleToggle} href={'#about'}><h1 className='md:text-[100px] text-[#d6d6d6] text-[80px] font-extrabold'>About</h1></Link>
        </motion.div>
      </motion.div>

      <motion.div style={{borderColor: selectedAccentColor}} variants={variants} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.2, delay: 0.6 }} className='fixed bg-[#090909] transition-all border-b z-[31] top-[50vh] h-[25vh] w-full flex items-center justify-center'>
        <motion.div variants={variants} initial="closed3" animate={isOpen ? "open3" : "closed3"} transition={{ duration: 0.3, delay: 1.2, type:"keyframes" }} className='w-[70%] flex justify-start items-center'>
          <Link onClick={handleToggle} href={'#work'}><h1 className='md:text-[100px] text-[#d6d6d6] text-[80px] font-extrabold'>Work</h1></Link>
        </motion.div>
      </motion.div>

      <motion.div style={{borderColor: selectedAccentColor}} variants={variants} initial="closed2" animate={isOpen ? "open2" : "closed2"} transition={{ duration: 0.2, delay: 0.8 }} className='bg-[#090909] transition-all fixed border-b z-[31] top-[75vh] h-[25vh] w-full flex items-center justify-center'>
        <motion.div variants={variants} initial="closed3" animate={isOpen ? "open3" : "closed3"} transition={{ duration: 0.5, delay: 1.3, type:"keyframes" }} className='w-[70%] flex justify-start items-center'>
          <Link onClick={handleToggle} href={'#contact'}><h1 className='md:text-[100px] text-[#d6d6d6] text-[80px] font-extrabold'>Contact</h1></Link>
        </motion.div>
        <AccentSwitch />
      </motion.div>

      <motion.div style={{ backgroundColor: selectedAccentColor }} variants={variants} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.2, delay: 0.1 }} className='fixed z-[30] top-0 h-[25vh] w-full '></motion.div>
      <motion.div style={{ backgroundColor: selectedAccentColor }} variants={variants} initial="closed2" animate={isOpen ? "open2" : "closed2"} transition={{ duration: 0.2, delay: 0.3 }} className='fixed z-[30] top-[25vh] h-[25vh] w-full'></motion.div>
      <motion.div style={{ backgroundColor: selectedAccentColor }} variants={variants} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.2, delay: 0.5 }} className='fixed z-[30] top-[50vh] h-[25vh] w-full'></motion.div>
      <motion.div style={{ backgroundColor: selectedAccentColor }} variants={variants} initial="closed2" animate={isOpen ? "open2" : "closed2"} transition={{ duration: 0.2, delay: 0.7 }} className='fixed z-[30] top-[75vh] h-[25vh] w-full'></motion.div>
    </>
  )
}

export default NavBar