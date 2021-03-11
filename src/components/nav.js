import React from "react"
import { Link } from "gatsby"
import { Nav, Navbar } from "react-bootstrap"

import Logo from "../images/logo.svg"

const NavBar = () => {
  return (
    <Navbar className="px-4" expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Luxury Car Rental Logo"
        />{" "}
        LUXURY CAR RENTAL
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} className="p-2 mx-2" to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} className="p-2 mx-2" to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} className="p-2 mx-2" to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
