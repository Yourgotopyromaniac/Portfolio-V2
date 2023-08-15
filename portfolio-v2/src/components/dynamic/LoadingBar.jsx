import React, { useEffect } from 'react';
import { easeInOut, motion, useAnimation } from 'framer-motion';


const LoadingBar = () => {

  const loadBar = useAnimation();


  useEffect(() => {
    loadBar.start({
      width: '100vw',
      transition: { type: 'keyframes', duration: 4, ease: easeInOut }
    }).then(() => {
      loadBar.start({
        height: '100vh',
        transition: { duration: 1, type: 'keyframes', ease: easeInOut },
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
