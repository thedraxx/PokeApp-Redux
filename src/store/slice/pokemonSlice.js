import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        loading: false,
        pokemon: [],
    },
    reducers: {
        startLoadingPokemons: (state, action) => {
            state.loading = true;
        },
        setPokemon: (state, action) => {
            state.pokemon = action.payload.pokemons;
            state.loading = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setPokemon, startLoadingPokemons } = pokemonSlice.actions;