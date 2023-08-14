// src/redux/accentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const accentSlice = createSlice({
    name: 'accent',
    initialState: {
        selectedAccentColor: '#6fd10c', // Default accent color
        availableAccentColors: ['#ff4040', '#ff9740', '#265ea0', '#6fd10c'],
    },
    reducers: {
        changeAccentColor: (state, action) => {
            state.selectedAccentColor = action.payload;
        },
    },
});

export const { changeAccentColor } = accentSlice.actions;
export default accentSlice.reducer;
