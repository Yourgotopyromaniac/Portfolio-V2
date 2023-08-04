import React, {useEffect, useState} from 'react'
import LoadingBar from './LoadingBar'
import { easeInOut, motion, useAnimation } from 'framer-motion'
import '@fontsource/bebas-neue';

const LoadingScreen = () => {

  const reveal = useAnimation();
  const [progress, setProgress] = useState(0);
  const cover = useAnimation();

  useEffect(()=> {

    document.body.style.overflowY = 'hidden';

    const loadAnimComplete = setTimeout(() => {
      document.body.style.overflowY = 'scroll';
      document.body.style.overflowX = 'hidden';
    }, 12000)

    return () => clearTimeout(loadAnimComplete);
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, 64);

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    reveal.start({
      opacity: 1,
      transition: { duration: 0, delay: 12 }
    }).then(() => {
      reveal.start({
        height: 0,
        transition: { duration: 2, delay: 0, ease: easeInOut }
      });
    });
  }, [reveal]);

  useEffect(() => {
    cover.start({
      color: '#050505',
      transition: { duration: 0.5, delay: 9 },
    }).then(() => {
      cover.start({
        x: -200,
        opacity: 0,
        transition: { duration: 0.5, delay: 2.5 },
      });
    });
  }, [cover]);


  return (
    <div className='fixed top-0 left-0 z-40'>
      <motion.p
        animate={cover}
        className='text-[#d6d6d6] text-[78px] font-extrabold font-bebas top-14 left-16 md:top-14 md:left-18 absolute z-[150]'>{`${progress}%`}</motion.p>
      <motion.div
        animate={{ display: 'none' }}
        transition={{ delay: 12 }}
        className='bg-[#050505] h-[100vh] w-[100vw] flex flex-col py-0 px-0 font-bold justify-center relative'>

        <LoadingBar />
      </motion.div>

      <motion.div
          initial={{ height: '50%', opacity: 0 }}
          animate={reveal}
          className='fixed origin-bottom top-0 z-[30] left-0 w-full bg-[#d6d6d6]' layout></motion.div>

        <motion.div
          initial={{ height: '50%', opacity: 0 }}
          animate={reveal}
          className='fixed origin-top bottom-0 z-[30] left-0 w-full bg-[#d6d6d6]' layout></motion.div>
    </div>
  )
}

export default LoadingScreen