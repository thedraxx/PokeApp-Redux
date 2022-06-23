import { configureStore } from '@reduxjs/toolkit'
import { darkModeSlice } from './slice/DarkModeSlice'
import { pokemonSlice } from './slice/pokemonSlice'

export const store = configureStore({
    reducer: {
        pokemons: pokemonSlice.reducer,
        darkMode: darkModeSlice.reducer
    },
})