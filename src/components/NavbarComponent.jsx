import { useState, useEffect } from "react"

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

import { navDropdowns } from "../data/index";

const NavbarComponent = () => {
  const[changeColor, setChangeColor, setChangePos] = useState(true);

  const changeBackgroundColor = ()=> {
    if (window.scrollY > 10){
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
        <Navbar expand="lg" className={changeColor ? "color-active" : "color-inactive position-sticky"}>
          <Container>
            <Navbar.Brand href="#home" className="fs-6 fw-bold">
              {/* <img 
                src="/public/hero.png"
                width="40"
                height="40"
                className="d-inline-block align-center bg-body--navbar-color"
                alt="React Bootstrap logo"
              /> */}
              KemayoranStreet 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                {navLinks.map((link)=>{
                  return(
                    <div className="nav-link" key={link.id}>
                      <NavLink to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }end>{link.text}</NavLink>
                    </div>
                   );
                  })
                } 
                <NavDropdown className="nav-tema pt-lg-1 " title="Tema" id="collapsible-nav-dropdown">
                {navDropdowns.map((link)=>{
                  return(
                    <div className="drop-tema  position-relative border-none" key={link.id}>
                      <NavDropdown.Item to={link.path}  className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }end>
                        {link.text} 
                      </NavDropdown.Item>
                    </div>  
                    )
                  }
                )}
                </NavDropdown>
              </Nav>

              <div className="text-center">
                <button type="button" className="btn btn-outline rounded-1">Mulai Promosi</button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavbarComponent