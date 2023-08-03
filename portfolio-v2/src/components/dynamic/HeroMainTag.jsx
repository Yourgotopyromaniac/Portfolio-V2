import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TagTextMask from '../masks/TagTextMask'

const HeroMainTag = () => {

  const TagTexts = ["websites", "webapps", "web interfaces", "web-anything", "web-everything"]
  const [tagIndex, setTagIndex] = useState(0);
  const order = [0, 1, 2, 3, 4];
  let tagDelay;
  let tagInterval;
 


  useEffect(() => {
    tagDelay = setTimeout(() => {
      tagInterval = setInterval(() => {
        setTagIndex((prevIndex) => {
          const nextIndex = (order.indexOf(prevIndex) + 1) % order.length;
          return order[nextIndex];
        });
      }, 3000);
    }, 6000);

    return () => {
      clearTimeout(tagDelay);
      clearInterval(tagInterval);
    };

  }, [])

  const tagText = TagTexts[tagIndex];




  return (
    <div className='relative'>
      <div className='absolute z-10 left-0 top-0 grid grid-cols-4 gap-0 w-full h-full'>
      <TagTextMask delay={8}/>
      <TagTextMask delay={8.3}/>
      <TagTextMask delay={8.7}/>
      <TagTextMask delay={8.1}/>
      <TagTextMask delay={8.4}/>
      <TagTextMask delay={8.2}/>
      <TagTextMask delay={8.5}/>
      <TagTextMask delay={8.6}/>
      </div>
      <motion.h1 className='text-[#ff4040]'>{tagText}</motion.h1>
    </div>
  )
}

export default HeroMainTag