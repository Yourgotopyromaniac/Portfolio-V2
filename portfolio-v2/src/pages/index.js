import Hero from "@/pages/portfolio/Hero"
import LoadingScreen from "@/components/LoadingScreen";
import DateTime from "@/components/DateTime";
import dynamic from 'next/dynamic'
import styles from '@/styles/Menu/menu.module.css'
import { useState } from "react";
import { motion } from "framer-motion";
import sun from "@/assets/sunSvg.svg";
import moon from "@/assets/moonSvg.svg";
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

const Home = ()=>  {


  const dispatch = useDispatch();
  const isDark = useSelector((state)=>state.theme.isDark);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleTheme = ()=>{
    dispatch(toggleTheme());
    console.log(isDark);
  }
 
  return (
    
    <div className={`w-[100vw] relative h-full transition-all duration-500 ease-in-out overflow-x-hidden ${isDark ? 'bg-[#090909] text-[#e6e6e6]' : 'bg-[#e6e6e6] text-[#090909]'}  `}>
      <AnimatedCursor
        color="239,68, 68"
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

      <nav className='fixed z-[120] top-14 right-8'>
        <div onClick={handleToggle} className='flex flex-col gap-2'>
          <span className={!isOpen ? styles.menuBar : styles.menuBar1Active}></span>
          <span className={!isOpen ? styles.menuBar : styles.menuBar2Active}></span>
        </div>
      </nav>

        <motion.div variants={variants} initial="closed" animate={ isOpen ? "open" : "closed" } transition={{duration : 0.2, delay: 0}} className='bg-[#ff3333] fixed border-[#050505] border-b-2 z-[100] top-0 h-[25vh] w-full '></motion.div>
        <motion.div variants={variants} initial="closed" animate={ isOpen ? "open" : "closed" } transition={{duration : 0.2, delay: 0.1}} className='bg-[#ff3333] fixed border-[#050505] border-b-2 z-[100] top-[25vh] h-[25vh] w-full'></motion.div>
        <motion.div variants={variants} initial="closed" animate={ isOpen ? "open" : "closed" } transition={{duration : 0.2, delay: 0.2}} className='bg-[#ff3333] fixed border-[#050505] border-b-2 z-[100] top-[50vh] h-[25vh] w-full'></motion.div>
      <motion.div variants={variants} initial="closed" animate={ isOpen ? "open" : "closed" }transition={{duration : 0.2, delay: 0.3}} className='bg-[#ff3333] fixed border-[#050505] border-b-2 z-[100] top-[75vh] h-[25vh] w-full'></motion.div>


     
      <nav onClick={handleTheme} className={`flex items-center overflow-hidden fixed z-[120] bottom-8 left-8 transition-all duration-1000 ease-in-out justify-center rounded-[50%] border-[1px] border-[#ff3333] w-[35px] h-[35px] ${isDark ? 'bg-[black]' : 'bg-[white]'} `}>
      <div  className={`flex flex-col relative top-[14px] transition-all duration-500 ease-in-out gap-1 w-[25px] ${isDark ? 'rotate-0' : 'rotate-180'}  `}>
        <div>
          <Image width={25} height={25} src={moon} alt="moon icon" />
        </div>
        <div>
          <Image width={25} height={25} src={sun} alt="sun icon" />
        </div>
      </div>
      
      </nav>

    </div>
  )
}


export default Home;