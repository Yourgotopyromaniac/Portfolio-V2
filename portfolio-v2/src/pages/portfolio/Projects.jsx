import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/text/ProjectCard'
import { useSelector } from 'react-redux'

const Projects = () => {

  const selectedAccentColor = useSelector(
    (state) => state.accent.selectedAccentColor
  );


  const projectData = [
    {
      imgClass: 'projectrad',
      name: 'radioadspread',
      stack: 'ReactJS, ChakraUI, GraphQL.',
      bgColor: 'from-[#004643] via-[#004643]',
      color : '#f99b28',
      textColor: 'text-[#f99b28]',
      desc: 'RadioAdSpread is an online platorm facilitating a marketplace for ad services via radio.',
      border: 'border-[#f99b28]',
      background: 'bg-[#004643]',
      link: 'https://radioadspread.com'
    },

    {
      imgClass: 'projectsu',
      name: 'Worker Registry',
      stack: 'NextJS, TypeScript, SCSS.',
      bgColor: 'from-[#f5f5f5] via-[#f5f5f5]',
      color : '#0071bb',
      textColor: 'text-[#0071bb]',
      desc: 'A worker registry search application for Space Universe Africa.',
      border: 'border-[#050505]',
      background: 'bg-[#f5f5f5]',
      link: 'worker-registry.vercel.app'
    },

    {
      imgClass: 'projectula',
      name: 'ulesawards',
      stack: 'NextJS, Typescript, Redux, Tailwind.',
      bgColor: 'from-[#141414] via-[#141414]',
      color : '#c7291f',
      textColor: 'text-[#c7291f]',
      desc: 'fully functional voting platform for the ULES dinner awards.',
      border: 'border-[#c7291f]',
      background: 'bg-[#141414]',
      link: 'https://ulesawards.tech'
    },

    {
      imgClass: 'projecth4e',
      name: 'Hack4Earth',
      stack: 'HTML, SCSS, JavaScript.',
      bgColor: 'from-[#f2f2f2] via-[#f2f2f2]',
      color : '#72319B',
      textColor: 'text-[#72319B]',
      desc: 'The official website for the Hack4Earth hackathon.',
      border: 'border-[#c8ff00]',
      background: 'bg-[#f2f2f2]',
      link: 'hack4earth.vercel.app'
    }
  ]

  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className='z-[20] h-[150vh] flex justify-center items-center'>
      <div className='absolute rotate-90 w-[120vh] landscape-rotate md:rotate-0 md:w-full leading-[0] font-extrabold md:text-[25rem] flex justify-center items-center'>
        <h1 className='lg:tracking-wide md:tracking-[0] tracking-[0] landscape-small project-bg-sm md:text-[20rem] text-[25rem] lg:text-[25rem]'>PROJECTS</h1>
      </div>

      <motion.div
        style={{ borderColor: selectedAccentColor }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.3, delay: 0.5, type: 'keyframes' }}
        layout
        className='border-4 origin-center h-[65%] w-[90%]'>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1, type: 'keyframes'}}
          style={{ scrollSnapType: 'x mandatory' }}
          className='flex-nowrap backdrop projects items-center flex gap-28 overflow-x-scroll h-full'>
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))
          }
        </motion.div>


      </motion.div>
    </div>
  )
}

export default Projects