import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';


const LoadingBar = () => {

  const loadBar = useAnimation();


  useEffect(() => {
    loadBar.start({
      width: '100vw',
      transition: { type: 'keyframes', duration: 4 }
    }).then(() => {
      loadBar.start({
        height: '100vh',
        transition: { duration: 1 },
      }).then(() => {
        loadBar.start({
          display: 'none',
          transition: { duration: 0, delay: 1 }
        })
      });
    })
  }, [loadBar]);



  return (
    <div className='relative w-full h-full flex items-center justify-start'>
      <motion.div
        className='flex flex-col items-start gap-4 relative w-full' layout>
        <motion.div
          initial={{ height: '5vh', opacity: 1 }}
          animate={loadBar}
          style={{
            width: '0vw',
            background: '#d6d6d6',
          }}
          layout
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingBar;
