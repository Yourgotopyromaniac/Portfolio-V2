import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';


const LoadingBar = () => {

  const loadBar = useAnimation();
  const loadBar2 = useAnimation();
  const loadBar3 = useAnimation();
  const loadBar4 = useAnimation();


  useEffect(() => {
    loadBar.start({
      width: '100vw',
      transition: { type: 'keyframes', duration: 2 }
    }).then(() => {
      loadBar.start({
        height: '50vh',
        transition: { duration: 2, delay: 7 },
      }).then(() => {
        loadBar.start({
          display: 'none',
          transition: { duration: 0, delay: 1 }
        })
      });
    })
    loadBar2.start({
      height: '100vh',
      transition: { type: 'keyframes', duration: 2, delay: 2 }
    }).then(() => {
      loadBar2.start({
        width: '50vw',
        transition: { duration: 2, delay: 5 },
      }).then(() => {
        loadBar2.start({
          display: 'none',
          transition: { duration: 0, delay: 1 }
        })
      });
    })
    loadBar3.start({
      width: '100vw',
      transition: { type: 'keyframes', duration: 2, delay: 4 }
    }).then(() => {
      loadBar3.start({
        height: '50vh',
        transition: { duration: 2, delay: 3 },
      }).then(() => {
        loadBar3.start({
          display: 'none',
          transition: { duration: 0, delay: 1 }
        })
      });
    })

    loadBar4.start({
      height: '100vh',
      transition: { type: 'keyframes', duration: 2, delay: 6 }
    }).then(() => {
      loadBar4.start({
        width: '50vw',
        transition: { duration: 2, delay: 1 },
      }).then(() => {
        loadBar4.start({
          display: 'none',
          transition: { duration: 0, delay: 1 }
        })
      });
    })
  }, [loadBar]);



  return (
    <div className='relative w-full h-full'>
      <motion.div
        initial={{ height: '5vh', opacity: 1 }}
        animate={loadBar}
        style={{
          width: '0vw',
          background: '#d6d6d6',
          position: 'absolute',
          top: 0
        }}
        layout
      ></motion.div>

      <motion.div
        initial={{ width: '5vh', opacity: 1 }}
        animate={loadBar2}
        style={{
          height: '0vh',
          background: '#d6d6d6',
          position: 'absolute',
          right: 0
        }}
        layout
      ></motion.div>

      <motion.div
        initial={{ height: '5vh', opacity: 1 }}
        animate={loadBar3}
        style={{
          width: '0vw',
          background: '#d6d6d6',
          position: 'absolute',
          bottom: 0,
          right: 0
        }}
        layout
      ></motion.div>

      <motion.div
        initial={{ width: '5vh', opacity: 1 }}
        animate={loadBar4}
        style={{
          height: '0vh',
          background: '#d6d6d6',
          position: 'absolute',
          left: 0,
          bottom: 0
        }}
        layout
      ></motion.div>

    </div>
  );
};

export default LoadingBar;
