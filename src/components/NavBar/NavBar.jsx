import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

export const NavBar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Oh yes... Another PokeApi</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Hello there, I'm a React developer.</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
