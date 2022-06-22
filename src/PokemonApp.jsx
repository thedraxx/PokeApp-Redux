import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Body } from "./components/body";
import { NavBar } from "./components/NavBar/";
import { getPokemons } from "./store/slice/";

function PokemonApp() {
  // Hacemos uso de useDispatch para poder acceder a la funcion dispatch
  const dispatch = useDispatch();

  // Hacemos uso de useEffect para que se ejecute cuando cargue el documento y haga dispatch a la accion getPokemons
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      {/* NavBar */}
      <NavBar />
      {/* Body donde se encuentran los pokemons */}
      <h1 className="text text-center">Oh Shit, Another PokeAPI?!</h1>
      <Body />
      <hr />
    </>
  );
}

export default PokemonApp;
