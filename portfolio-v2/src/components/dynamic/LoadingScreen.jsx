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
    }, 7000)

    return () => clearTimeout(loadAnimComplete);
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 2);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    reveal.start({
      opacity: 1,
      transition: { duration: 0, delay: 5.8 }
    }).then(() => {
      reveal.start({
        height: 0,
        transition: { duration: 1, delay: 0, ease: easeInOut }
      });
    });
  }, [reveal]);

  useEffect(() => {
    cover.start({
      color: '#050505',
      transition: { duration: 0.5, delay: 4.5 },
    }).then(() => {
      cover.start({
        x: -200,
        opacity: 0,
        transition: { duration: 0.5, delay: 0.5 },
      });
    });
  }, [cover]);


  return (
    <div className='absolute top-0 left-0 z-40'>
      <motion.p
        animate={cover}
        className='text-[#e6e6e6] text-[78px] font-extrabold font-bebas top-12 left-10 md:top-10 md:left-14 absolute z-[150]'>{`${progress}%`}</motion.p>
      <motion.div
        animate={{ display: 'none' }}
        transition={{ delay: 6 }}
        className='bg-[#050505] h-[100vh] w-[100vw] flex flex-col py-0 px-0 font-bold justify-center relative'>

        <LoadingBar />
      </motion.div>

      <motion.div
          initial={{ height: '50%', opacity: 0 }}
          animate={reveal}
          className='fixed origin-bottom top-0 z-[30] left-0 w-full bg-[#e6e6e6]' layout></motion.div>

        <motion.div
          initial={{ height: '50%', opacity: 0 }}
          animate={reveal}
          className='fixed origin-top bottom-0 z-[30] left-0 w-full bg-[#e6e6e6]' layout></motion.div>
    </div>
  )
}

export default LoadingScreen