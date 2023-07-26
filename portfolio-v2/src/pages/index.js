import Hero from "@/pages/portfolio/Hero"
import LoadingScreen from "@/components/LoadingScreen";
import DateTime from "@/components/DateTime";
import dynamic from 'next/dynamic'
import styles from '@/styles/Menu/menu.module.css'
import { useState } from "react";
import { motion} from "framer-motion";

const variants = {

  open: {
    x: 0
  },

  closed: {
    x: "-100vw"
  }
}

const navBgVariants = {

  bgOpen: {
    x : 0
  }, 

  bgClosed: {
    x: "100vw"
  }

}

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[100vw] relative h-full overflow-x-hidden">
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

        <motion.div variants={variants} initial="closed" animate={ isOpen ? "open" : "closed" } transition={{duration : 0.2, delay: 0}} className='bg-[#ff3333] fixed  z-[100] top-0 h-[25vh] w-full '></motion.div>
        <motion.div variants={variants} initial="closed" animate={ isOpen ? "open" : "closed" } transition={{duration : 0.2, delay: 0.25}} className='bg-[#ff3333] fixed  z-[100] top-[25vh] h-[25vh] w-full'></motion.div>
        <motion.div variants={variants} initial="closed" animate={ isOpen ? "open" : "closed" } transition={{duration : 0.2, delay: 0.5}} className='bg-[#ff3333] fixed  z-[100] top-[50vh] h-[25vh] w-full'></motion.div>
        <motion.div variants={variants} initial="closed" animate={ isOpen ? "open" : "closed" }transition={{duration : 0.2, delay: 0.75}} className='bg-[#ff3333] fixed z-[100] top-[75vh] h-[25vh] w-full'></motion.div>


    </div>
  )
}
