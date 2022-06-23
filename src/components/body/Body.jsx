import React from "react";
import { Button, Card, ListGroup, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
export const Body = () => {
  //Obtenemos los Pokemons del Store usando UseSelector
  const { isLoading, pokemons } = useSelector((state) => state.pokemons);
  const { isDarkMode } = useSelector((state) => state.darkMode);

  return (
    <>
      {/* Si esta cargando mostramos un loading */}
      {isLoading === true ? (
        <div className=" mx-auto row justify-content-center ">
          <Spinner animation="border" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        // Si no esta cargando mostramos los Pokemons
        <div>
          {pokemons.map((pokemon) => (
            <Card
              style={{ width: "18rem" }}
              className={`mx-auto col-md-6 col-sm-6 container-fluid mt-4 border border-${!isDarkMode} rounded ${isDarkMode}`}
              key={pokemon.id}
            >
              <Card.Img
                variant="top"
                src={pokemon.sprites.front_default}
                className={`border border-${!isDarkMode} mt-3`}
              />
              <Card.Body>
                <Card.Title className="mx-auto text-capitalize text-center">
                  {pokemon.name}
                </Card.Title>
                <Card.Text>
                  <p className="mx-auto text-center ">Habilities </p>
                  {pokemon.abilities.map((ab) => (
                    <ListGroup>
                      <ListGroup.Item
                        variant={`${isDarkMode}`}
                        className="mt-1 text-center"
                      >
                        {ab.ability.name}
                      </ListGroup.Item>
                    </ListGroup>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};
