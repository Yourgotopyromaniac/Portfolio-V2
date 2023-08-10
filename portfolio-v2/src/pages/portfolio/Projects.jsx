import React from 'react'
import { color, motion } from 'framer-motion'
import ProjectCard from '@/components/text/ProjectCard'


const Projects = () => {

  const projectData = [
    {
      imgClass: 'projectrad',
      name: 'radioadspread',
      stack: 'ReactJS, ChakraUI, GraphQL',
      bgColor: 'from-[#004643] via-[#004643]',
      textColor: 'text-[#f99b28]',
      desc: 'RadioAdSpread is an online platorm facilitating a marketplace for ad services via radio.',
      border: 'border-[#f99b28]',
      background: 'bg-[#004643]'
    },

    {
      imgClass: 'projectsu',
      name: 'Worker Registry',
      stack: 'NextJS, TypeScript, SCSS ',
      bgColor: 'from-[#f5f5f5] via-[#f5f5f5]',
      textColor: 'text-[#0071bb]',
      desc: 'A worker registry application for Space Universe Africa',
      border: 'border-[#050505]',
      background: 'bg-[#f5f5f5]'
    },

    {
      imgClass: 'projectula',
      name: 'ulesawards',
      stack: 'NextJS, Typescript, Tailwind',
      bgColor: 'from-[#141414] via-[#141414]',
      textColor: 'text-[#c7291f]',
      desc: 'fully functional voting platform for the ULES dinner awards.',
      border: 'border-[#c7291f]',
      background: 'bg-[#141414]'
    },

    {
      imgClass: 'projecth4e',
      name: 'Hack4Earth',
      stack: 'HTML, SCSS, JavaScript',
      bgColor: 'from-[#f2f2f2] via-[#f2f2f2]',
      textColor: 'text-[#72319B]',
      desc: 'The official website for the Hack4Earth hackathon fully built by me.',
      border: 'border-[#72319B]',
      background: 'bg-[#f2f2f2]'
    }
  ]

  return (
    <div className='relative w-screen h-[100vh] mt-36 flex justify-center items-center'>
      <div className='absolute rotate-90 w-[120vh] lg:rotate-0 md:w-full leading-[0] font-bebas font-extrabold md:text-[25rem] flex justify-center items-center gap-2'>
        <h1 className='tracking-wide text-[25rem]'>PROJECTS</h1>
      </div>

      <motion.div

        initial={{ width: 0 }}
        whileInView={{ width: '90%' }}
        transition={{ duration: 0.5, delay: 1.5 }}
        viewport={{ once: true }}
        layout
        className='border-4 backdrop  border-[#ff4040] origin-center flex h-[95%] z-10'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          style={{ scrollSnapType: 'x mandatory' }}
          className='flex-nowrap projects items-center flex  gap-28 overflow-x-scroll h-full'>
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