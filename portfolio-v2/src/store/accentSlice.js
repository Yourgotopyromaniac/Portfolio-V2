import { createSlice } from '@reduxjs/toolkit';

const accentSlice = createSlice({
    name: 'accent',
    initialState: {
        selectedAccentColor: '#ff4040', 
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
