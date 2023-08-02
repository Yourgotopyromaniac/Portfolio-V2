import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';


const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  const loadBar = useAnimation();


  useEffect(() => {
    loadBar.start({
      width : '100vw',
      transition : {type: 'keyframes' ,duration : 4}
    }).then(() => {
      loadBar.start({
        height: '100vh', 
        transition : { duration: 1 },
      }).then(()=>{
        loadBar.start({
          display : 'none',
          transition: { duration: 0, delay: 1}
        })
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
          initial={{ height: '7vh', opacity : 1 }}
          animate={loadBar}
          style={{ 
            width: '0vw',
            background: '#e6e6e6',
          }}
          layout
        ></motion.div>


      </motion.div>
    </div>
  );
};

export default LoadingBar;
