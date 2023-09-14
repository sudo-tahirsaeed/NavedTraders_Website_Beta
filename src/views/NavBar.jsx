import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import logo from"../assets/logo.png"
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Navbar
        expand="lg"
        className={`navbar ${isMenuOpen ? "navbar-open" : ""}`}
        style={{ minHeight: isMenuOpen ? "50vh" : "5rem" }}
      >
        <Container>
          <Navbar.Brand
            style={{
              fontWeight: "bold",
              fontSize: 30,
              fontFamily: "sans-serif",
              color: "white",
            }}
            as={Link}
            to="/"
          >
            <img
             src={require('./logo192.png')}
              alt="logo"
              className="logo"
              style={{ height: 85,width:250,marginTop:0 }}
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleMenuToggle}
            className={`custom-toggler ${isMenuOpen ? "open" : ""}`}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              {/* Add event handlers for dropdown */}
              <NavDropdown
                title="Tiles"
                id="basic-nav-dropdown"

                // onMouseEnter={(e) => e.target.click()}
                // onMouseLeave={(e) => e.target.click()}
              >
                <Link ></Link>
                <NavDropdown.Item
                  as={Link}
                  to={`/products?size=${encodeURIComponent('Porcelain')}`}
                >
                  Porcelain
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  as={Link}
                  to={`/products?size=${encodeURIComponent('Ceramics')}`}
                >
                  Ceramic Tiles{" "}
                </NavDropdown.Item>

                <NavDropdown.Divider />
              </NavDropdown>

              {/* Add event handlers for another dropdown */}
              <NavDropdown
                title="Bathroom Solution"
                id="basic-nav-dropdown"
                // onMouseEnter={(e) => e.target.click()}
                // onMouseLeave={(e) => e.target.click()}
              >
                <NavDropdown.Item as={Link} to={`/products?size=${encodeURIComponent('Porcelain')}`}>
                  All Products
                </NavDropdown.Item>
                <NavDropdown.Divider />

                {/* <NavDropdown.Item as={Link} to="/vanities">
                  Vanities
                </NavDropdown.Item> */}
                {/* <NavDropdown.Divider /> */}

                {/* <NavDropdown.Item as={Link} to="/home">
                  Something
                </NavDropdown.Item> */}
                {/* <NavDropdown.Divider /> */}
                {/* <NavDropdown.Item as={Link} to="/home">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>

              <Nav.Link as={Link} to="/contact">
                Contact Us{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
