import React from 'react'
import { useSelector } from 'react-redux'
import { circIn, easeIn, motion } from 'framer-motion';
import StackItem from '@/components/text/StackItem';

const Stack = () => {
    const selectedAccentColor = useSelector(
        (state) => state.accent.selectedAccentColor
    );
    const isDark = useSelector((state) => state.theme.isDark);


    return (
        <div className='w-screen py-16 my-10 relative z-[30] flex justify-center items-center'>

            <motion.div
                initial={{ scaleY: 0}}
                whileInView={{
                    scaleY: 1
                }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: easeIn, type: 'keyframes' }}
                style={{ backgroundColor: selectedAccentColor }} className='w-full h-full z-[10] origin-top absolute top-0 left-0' >
            </motion.div >

            <div className='w-[95%] flex lg:flex-row items-center flex-col gap-10 z-[12]'>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5, type: 'keyframes' }} viewport={{ once: true }} className={`flex flex-col my-40 relative items-center justify-center w-full md:w-1/2 exon-outline font-medium text-[180px] landscape-small lg:text-[240px] ${isDark ? 'text-[#090909]' : 'text-[#d6d6d6]'}`}>
                    <motion.h1 initial={{ y: 0 }} whileInView={{ y: 200 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.8, type: 'spring' }} className='absolute top-0'>Stack</motion.h1>
                    <motion.h1 initial={{ y: 0 }} whileInView={{ y: 100 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.8, type: 'spring' }} className='absolute top-0'>Stack</motion.h1>
                    <h1 className='exon-regular'>Stack</h1>
                    <motion.h1 initial={{ y: 0 }} whileInView={{ y: -100 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.8, type: 'spring' }} className='absolute top-0'>Stack</motion.h1>
                    <motion.h1 initial={{ y: 0 }} whileInView={{ y: -200 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.8, type: 'spring' }} className='absolute top-0'>Stack</motion.h1>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }} viewport={{ once: true }} className={`lg:w-1/2 w-full py-10 md:my-0 flex flex-wrap items-center justify-center ${isDark ? 'bg-[#090909]' : 'bg-[#d6d6d6]'}`}>
                    <div className='w-full px-4 md:px-10 flex flex-col gap-0' >
                        <StackItem align='' title='Programming Languages' items={['Typescript', 'Javascript', 'HTML']} rotate={90} />
                        <StackItem align='items-end' title='Frameworks' items={['NextJS', 'ReactJS']} reverse='flex-row-reverse' rotate={-90} />
                        <StackItem align='' title='Styling systems' items={['Tailwind', 'SCSS/SASS', 'CSS', 'Bootstrap']} rotate={90} />
                        <StackItem align='items-end' title='Animation libraries' items={['Framer Motion', 'GSAP']} reverse='flex-row-reverse' rotate={-90} />
                        <StackItem align='' title='Tools' items={['Redux - State Management', 'D3JS - Data Visualization', 'Graphql - Data Querying']} rotate={90} />
                    </div>

                </motion.div>
            </div>

        </div>


    )
}

export default Stack