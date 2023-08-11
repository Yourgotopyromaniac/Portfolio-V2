import React from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { changeAccentColor } from '@/store/accentSlice'
import { useState } from 'react'

const AccentSwitch = () => {

    const dispatch = useDispatch();
    const { selectedAccentColor, availableAccentColors } = useSelector(
        (state) => state.accent
    );

    const handleAccentChange = (color) => {
        dispatch(changeAccentColor(color));
    };


    return (
        <div className='flex gap-2 items-center absolute bottom-8 left-20'>
            {availableAccentColors.map((color) => (
                <motion.div
                    key={color}
                    style={{ backgroundColor: color, border: selectedAccentColor === color ? '3px solid white' : 'none', }}
                    onClick={() => handleAccentChange(color)}
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.1 }} className='w-[30px] h-[30px] rounded-[50%]'></motion.div>
            ))}
        </div>
    )
}

export default AccentSwitch