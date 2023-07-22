import React, { useState, useEffect } from 'react';
import { easeInOut, motion, useAnimation } from 'framer-motion';


const LoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const cover = useAnimation();
  const loadBar = useAnimation();
  const reveal = useAnimation();

  useEffect(() => {
    loadBar.start({
      height: '100vh', 
      transition : { duration: 1, delay: 4 }
    }).then(() => {
      loadBar.start({
        opacity: 0,
        transition: { duration: 0, delay: 1}
      });
    });
  }, [loadBar]);


  useEffect(() => {
    reveal.start({
      opacity: 1,
      transition: { duration: 0, delay: 6 }
    }).then(() => {
      reveal.start({
        height: 0,
        transition: { duration: 1, delay: 0, ease: easeInOut }
      });
    });
  }, [reveal]);


  useEffect(() => {
    cover.start({
      color: '#101010',
      transition: { duration: 0.5, delay: 5.1 },
    }).then(() => {
      cover.start({
        x: -200,
        opacity: 0,
        transition: { duration: 0.5, delay: 0.5 },
      });
    });
  }, [cover]);

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
          initial={{ height: '50%', opacity: 0 }}
          animate={reveal}
          className='absolute origin-bottom top-0 left-0 w-full bg-[#e6e6e6]' layout></motion.div>

        <motion.div
          initial={{ height: '50%', opacity: 0 }}
          animate={reveal}
          className='absolute origin-top bottom-0 left-0 w-full bg-[#e6e6e6]' layout></motion.div>


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
      <motion.p
        animate={cover}
        className='text-[#e6e6e6] text-[78px] font-extrabold font-bebas top-12 left-10 md:top-10 md:left-14 absolute'>{`${progress}%`}</motion.p>
    </div>
  );
};

export default LoadingBar;
