// src/redux/accentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const accentSlice = createSlice({
    name: 'accent',
    initialState: {
        selectedAccentColor: '#ff4040', // Default accent color
        availableAccentColors: ['#ff4040', '#ff9740', '#265ea0', '#169f32'],
    },
    reducers: {
        changeAccentColor: (state, action) => {
            state.selectedAccentColor = action.payload;
        },
    },
});

export const { changeAccentColor } = accentSlice.actions;
export default accentSlice.reducer;
