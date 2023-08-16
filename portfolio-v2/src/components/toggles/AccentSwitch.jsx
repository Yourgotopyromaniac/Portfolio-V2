import React from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { changeAccentColor } from '@/store/accentSlice'

const AccentSwitch = () => {

    const dispatch = useDispatch();
    const { selectedAccentColor, availableAccentColors } = useSelector(
        (state) => state.accent
    );

    const handleAccentChange = (color) => {
        dispatch(changeAccentColor(color));
    };


    return (
        <div className='flex flex-col gap-2 items-center relative left-4'>
            {availableAccentColors.map((color) => (
                <motion.div
                    key={color}
                    style={{ backgroundColor: color, border: selectedAccentColor === color ? '3px solid white' : 'none', }}
                    onClick={() => handleAccentChange(color)}
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.3}} className='w-[25px] h-[25px] rounded-[50%]'></motion.div>
            ))}
        </div>
    )
}

export default AccentSwitch