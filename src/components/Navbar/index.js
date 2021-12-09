import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  NavBtn,
  NavBtnLink,
} from "./NavElements";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">X - Ray</NavLogo>
          <MobileIcon>
            <MenuIcon />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="nosotros">Nosotros</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="servicios">Servicios</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Convenios">Convenios</NavLinks>
              <NavItem>
                <NavLinks to="Contactanos">Contactanos</NavLinks>
              </NavItem>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/llamar">Llamar</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
