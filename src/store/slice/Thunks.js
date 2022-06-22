import { setPokemons, startLoadingPokemons } from "./pokemonSlice/";

export const getPokemons = () => {

    // Hacemos uso de una funcion thunk para que sea asincrona
    return async (dispatch, getState) => {
        // Cuando empieza a cargar los pokemons
        // ejectuamos la accion startLoadingPokemons
        dispatch(startLoadingPokemons());

        //TODO: realizar peticion HTTP para obtener los pokemons
        //Peticion con fetch
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
        //Convertimos la respuesta a JSON
        const data = await resp.json();

        //Cuando ya tenemos la data, hacemos un map para obtener la data completa de cada pokemon
        data.results.map(async (d) => {
            const resData = await fetch(d.url)
            const fullData = await resData.json();

            // Cuando ya tenemos los pokemons
            // ejectuamos dispatch con la accion setPokemons con los pokemons obtenidos
            dispatch(setPokemons({ pokemons: fullData }));

        })




    }
}