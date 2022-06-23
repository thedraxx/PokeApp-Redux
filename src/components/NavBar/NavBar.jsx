import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from "../../store/slice";
import "../../styles/styles.css";

export const NavBar = () => {
  // Usamos useDispatch para acceder al dispatch de nuestro store
  const dispatch = useDispatch();
  // Usamos useSelector para acceder al state de nuestro store
  const { isDarkMode } = useSelector((state) => state.darkMode);

  // Si stateMode es light, activamos el modo oscuro
  // Si stateMode es dark, activamos el modo claro
  const Theme = () => {
    if (isDarkMode === "light") {
      dispatch(darkMode());
    } else {
      dispatch(lightMode());
    }
  };

  return (
    <>
      <Navbar className={`${isDarkMode}`}>
        <Container>
          <Navbar.Brand className="col-md-6 col-sm-6">
            <p className={`${isDarkMode}`}>Oh yes... Another PokeApi</p>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="col-md-3 col-sm-4">
              <Button onClick={Theme}>Light / Dark</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
