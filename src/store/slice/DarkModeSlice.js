import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        isDarkMode: "light",
    },
    reducers: {
        darkMode: (state) => {
            state.isDarkMode = "dark";
        },
        lightMode: (state) => {
            state.isDarkMode = "light";
        }
    }
});


// Action creators are generated for each case reducer function
export const { darkMode, lightMode } = darkModeSlice.actions;