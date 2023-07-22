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
      document.body.style.overflowY = 'auto';
    }, 3000)

    return () => clearTimeout(loadAnimComplete);
  })

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


  return (
    <div className='top-0 left-0'>
      <motion.p
        animate={cover}
        className='text-[#e6e6e6] text-[78px] font-extrabold font-bebas top-12 left-10 md:top-10 md:left-14 absolute z-20'>{`${progress}%`}</motion.p>
      <motion.div
        animate={{ display: 'none' }}
        transition={{ delay: 6 }}
        className='bg-[#101010] h-[100vh] w-[100vw] flex flex-col py-0 px-0 font-bold justify-center relative'>

        <LoadingBar />
      </motion.div>

      <motion.div
          initial={{ height: '50%', opacity: 0 }}
          animate={reveal}
          className='absolute origin-bottom top-0 z-10 left-0 w-full bg-[#e6e6e6]' layout></motion.div>

        <motion.div
          initial={{ height: '50%', opacity: 0 }}
          animate={reveal}
          className='absolute origin-top bottom-0 z-10 left-0 w-full bg-[#e6e6e6]' layout></motion.div>
    </div>
  )
}

export default LoadingScreen