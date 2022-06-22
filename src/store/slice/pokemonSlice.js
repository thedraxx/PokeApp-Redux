import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        isLoading: false,
        pokemons: [],
    },

    reducers: {
        //  Cuando los pokemons empiezan a cargar
        startLoadingPokemons: (state, /* action */) => {
            // modificamos el state y cambiamos el loading a true
            state.isLoading = true;
        },
        // Cuando ya tenemos los pokemons
        setPokemons: (state, action) => {
            //Modificamos el state con los pokemons y la pagina actual, tambien cambiamos el loading a false
            // Para que los pokemons no se pierdan, hacemos una copia del state y le vamos agregando los pokemons
            state.pokemons = [...state.pokemons, action.payload.pokemons];
            //Colocamos el loading a false dando a entender que la carga ya termino
            state.isLoading = false;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setPokemons, startLoadingPokemons } = pokemonSlice.actions;