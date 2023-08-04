import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'


const TagTextMask = ({delay}) => {

    const isDark = useSelector((state) => state.theme.isDark);

    return (
        <motion.div
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, times: [0, 0, 1, 1], repeat: Infinity, repeatDelay: 1, delay: delay }}
            className={`w-full h-full ${isDark ? 'bg-[#090909]' : 'bg-[#d6d6d6]'}`}>
        </motion.div>
    )
}

export default TagTextMask