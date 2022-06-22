import React from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
export const Body = () => {
  //Obtenemos los Pokemons del Store usando UseSelector
  const { isLoading, pokemons } = useSelector((state) => state.pokemons);

  return (
    <>
      {/* Si esta cargando mostramos un loading */}
      {isLoading === true ? (
        <div className=" mx-auto row justify-content-center">
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
              className="mx-auto "
              key={pokemon.id}
            >
              <Card.Img variant="top" src={pokemon.sprites.front_default} />
              <Card.Body>
                <Card.Title className="mx-auto text-capitalize text-center">
                  {pokemon.name}
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};
