import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Body } from "./components/body";
import { NavBar } from "./components/NavBar/";
import { getPokemons, darkMode, lightMode } from "./store/slice/";
import "./styles/styles.css";
function PokemonApp() {
  // Hacemos uso de useDispatch para poder acceder a la funcion dispatch
  const dispatch = useDispatch();

  const { isDarkMode } = useSelector((state) => state.darkMode);
  console.log(isDarkMode);
  // Hacemos uso de useEffect para que se ejecute cuando cargue el documento y haga dispatch a la accion getPokemons
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className={`${isDarkMode}`}>
      {/* NavBar */}
      <NavBar />
      {/* Body donde se encuentran los pokemons */}
      <h1 className="text text-center mx-auto col-md-6 col-sm-6">
        Oh Shit, Another PokeAPI?!
      </h1>
      <Body />
      <hr />
    </div>
  );
}

export default PokemonApp;
