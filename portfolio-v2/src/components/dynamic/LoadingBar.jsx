import React, { useEffect } from 'react';
import { easeInOut, motion, useAnimation } from 'framer-motion';


const LoadingBar = () => {

  const loadBar = useAnimation();


  useEffect(() => {
    loadBar.start({
      width: '100vw',
      transition: { type: 'keyframes', duration: 3.4, ease: easeInOut }
    }).then(() => {
      loadBar.start({
        height: '100vh',
        transition: { duration: 1, delay: 4, type: 'keyframes', ease: easeInOut },
      }).then(() => {
        loadBar.start({
          display: 'none',
          transition: { duration: 0, delay: 1 }
        })
      });
    })
  }, [loadBar]);



  return (
    <div className='w-full h-full flex items-center'>
      <motion.div
        className='flex flex-col items-start' layout>
        <motion.div
          initial={{ height: '8vh', opacity: 1 }}
          animate={loadBar}
          style={{
            width: '0vw',
            background: '#d6d6d6',
          }}
          layout
        >
          <motion.div animate={{opacity: 0}} transition={{delay: 6.5, duration: 0.5}} className='absolute w-[80vw] top-[50%] left-[50%] translate-x-[-50%] text-[#090909] font-bold translate-y-[-50%] flex justify-around text-[30px] md:text-[40px] gap-8'>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ delay: 4, duration: 0.5 }}>I</motion.div>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ delay: 4.3, duration: 0.5}}>Make</motion.div>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ delay: 4.6, duration: 0.5}}>this</motion.div>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ delay: 4.9, duration: 0.5}}>look</motion.div>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ delay: 5.2, duration: 0.5 }}>easy</motion.div>
          </motion.div>


        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingBar;
