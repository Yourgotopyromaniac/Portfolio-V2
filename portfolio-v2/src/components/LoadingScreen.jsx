import React from 'react'
import LoadingBar from './LoadingBar'
import '@fontsource/bebas-neue';

const LoadingScreen = () => {
  return (
    <div className='bg-[#101010] h-[100vh] w-[100vw] flex flex-col py-8 px-0 font-bold justify-center relative '>
      <LoadingBar/>
    </div>
  )
}

export default LoadingScreen