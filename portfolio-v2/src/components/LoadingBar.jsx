import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';


const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  const loadBar = useAnimation();


  useEffect(() => {
    loadBar.start({
      height: '100vh', 
      transition : { duration: 1, delay: 4 }
    }).then(() => {
      loadBar.start({
        display : 'none',
        transition: { duration: 0, delay: 1}
      });
    })
  }, [loadBar]);







  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 2);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className='w-full'>
      <motion.div
        className='flex flex-col items-start gap-4 relative w-full' layout>



        <motion.div
          initial={{ height: '8vh', opacity : 1 }}
          animate={loadBar}
          style={{
            width: `${progress}%`,
            transition: '0.2s ease-in-out',
            background: '#e6e6e6',
            transformOrigin: 'center'
          }}
          layout
        ></motion.div>


      </motion.div>
    </div>
  );
};

export default LoadingBar;
