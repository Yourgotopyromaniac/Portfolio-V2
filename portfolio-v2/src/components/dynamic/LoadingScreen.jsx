import React, {useEffect, useState} from 'react'
import LoadingBar from './LoadingBar'
import { easeInOut, motion, useAnimation } from 'framer-motion'

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
    }, 30);

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    reveal.start({
      opacity: 1,
      transition: { duration: 0, delay: 8.8 }
    }).then(() => {
      reveal.start({
        height: 0,
        transition: { duration: 1, delay: 0, ease: easeInOut, type: 'keyframes' }
      });
    });
  }, [reveal]);

  useEffect(() => {
    cover.start({
      opacity: 0,
      transition: { duration: 0.5, delay: 3.6 },
    }).then(()=>{
      cover.start({
        x: -400,
        transition : { duration : 0}
      })
    });
  }, [cover]);


  return (
    <div className='fixed top-0 left-0 z-40 font-bebas'>
      <motion.p
        animate={cover}
        className='text-[#d6d6d6] text-[90px] font-bebas font-extrabold top-14 left-16 md:top-14 md:left-18 absolute z-[150]'>{`${progress}%`}</motion.p>
      <motion.div
        animate={{ display: 'none' }}
        transition={{ delay: 9 }}
        className='bg-[#050505] h-[100vh] w-[100vw] flex flex-col justify-center'>

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