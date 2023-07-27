import Hero from "@/pages/portfolio/Hero"
import LoadingScreen from "@/components/LoadingScreen";
import DateTime from "@/components/DateTime";
import dynamic from 'next/dynamic'
import { useState } from "react";
import { motion } from "framer-motion";
import sun from "@/assets/sunSvg.svg";
import moon from "@/assets/moon2.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";



const variants = {

  open: {
    x: 0
  },

  closed: {
    x: "-100vw"
  }
}

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

const Home = () => {


  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleTheme = () => {
    dispatch(toggleTheme());
    console.log(isDark);
  }

  return (

    <div className={`w-[100vw] relative h-full transition-all duration-500 ease-in-out overflow-x-hidden ${isDark ? 'bg-[#090909] text-[#e6e6e6]' : 'bg-[#e6e6e6] text-[#090909]'}  `}>
      <AnimatedCursor
        color="235,77, 77"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerStyle={{
          backgroundColor: "rgba(230,230,230,0.9)",

          mixBlendMode: 'exclusion'
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          'nav'
        ]}
      />

      <LoadingScreen />
      <Hero />
      <DateTime />


      <nav className='fixed z-[20] top-14 right-8'>
        <div onClick={handleToggle} className='flex flex-col gap-2'>
          <span className={`menu-bar ${isOpen ? 'rotate-45' : ''}`} ></span>
          <span className={`menu-bar ${isOpen ? 'rotate-[315deg] -top-[14px]' : ''}`}></span>
        </div>
      </nav>

      <motion.div variants={variants} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.2, delay: 0 }} className='bg-[#f24141] fixed border-[#050505] border-b-2 z-[10] top-0 h-[25vh] w-full '></motion.div>
      <motion.div variants={variants} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.2, delay: 0.1 }} className='bg-[#f24141] fixed border-[#050505] border-b-2 z-[10] top-[25vh] h-[25vh] w-full'></motion.div>
      <motion.div variants={variants} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.2, delay: 0.2 }} className='bg-[#f24141] fixed border-[#050505] border-b-2 z-[10] top-[50vh] h-[25vh] w-full'></motion.div>
      <motion.div variants={variants} initial="closed" animate={isOpen ? "open" : "closed"} transition={{ duration: 0.2, delay: 0.3 }} className='bg-[#f24141] fixed border-[#050505] border-b-2 z-[10] top-[75vh] h-[25vh] w-full'></motion.div>



      <nav onClick={handleTheme} className={`flex items-center overflow-hidden fixed z-[20] bottom-8 left-8 transition-all duration-1000 ease-in-out justify-center rounded-[50%] border-[2px] border-[#f24141] w-[35px] h-[35px] ${isDark ? 'bg-[black]' : 'bg-[white]'} `}>
        <div className={`flex flex-col items-center relative transition-all duration-500 ease-in-out w-[25px]`}>
          <div className = {`absolute -top-[0.6rem] transition-all ease-in-out duration-300 ${isDark? ' translate-y-0' : 'translate-y-7'}`}>
            <Image width={20} height={20} src={moon} alt="moon icon"  />
          </div>
          <div className = {`absolute top-4 transition-all ease-in-out duration-300 ${isDark? ' translate-y-0' : '-translate-y-[1.8rem]'}`}>
            <Image width={25} height={25} src={sun} alt="sun icon" />
          </div>
        </div>

      </nav>

    </div>
  )
}


export default Home;