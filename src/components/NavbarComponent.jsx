import { useState, useEffect } from "react"

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const[changeColor, setChangeColor, setChangePos] = useState(true);

  const changeBackgroundColor = ()=> {
    if (window.scrollY >= 10){
      setChangeColor(true);
    }else {
       setChangeColor(false);
    }
  };

  useEffect(()=>{
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor);
  });

  return (
    <div className="text-left">
        <Navbar expand="lg" className={changeColor ? "color-active" : "bg-body-secondary position-sticky"}>
          <Container >
            <Navbar.Brand href="#home" className="fs-5 fw-bold">
            <img
              src="/public/hero.png"
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            KemayoranStreet</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {navLinks.map((link)=>{
                  return(
                    <div className="nav-link" key={link.id}>
                      <NavLink to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }end>{link.text}</NavLink>
                    </div>
                  );
                })} 

              </Nav>

              <div className="text-center">
                <button type="button" className="btn btn-outline-danger rounded-1">Join with us</button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavbarComponent