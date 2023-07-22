import React, {useState, useEffect} from 'react'
import '@fontsource/bebas-neue';
import { format, intervalToDuration } from 'date-fns';




const DateTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      // Update the time every second
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);

    const formattedDate = format(currentTime, 'MMMM dd, yyyy');
    const formattedTime = format(currentTime, 'HH:mm:ss');

    return (
        <div className='font-bebas text-md flex flex-col gap-2 fixed z-50 bottom-8 right-8'>
            <div className='text-red-500' suppressHydrationWarning>{formattedTime}</div>
            <div className='text-[#e6e6e6]' suppressHydrationWarning>{formattedDate}</div>
        </div>
    )
}

export default DateTime