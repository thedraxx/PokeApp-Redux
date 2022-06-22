import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import PokemonApp from "./PokemonApp";
import { store } from "./store/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  </>
);
