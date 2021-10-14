import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const {user,logOut} = useAuth();
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">Genius</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
            <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
            {user?.email ? 
          <button variant="light">Logout</button>  :
          <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
          }
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
