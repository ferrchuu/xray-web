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

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">X - Ray</NavLogo>
          <MobileIcon onClick={toggle}>
            <MenuIcon fontSize="large" />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="nosotros">Nosotros</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="servicios">Servicios</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="convenios">Convenios</NavLinks>
              <NavItem>
                <NavLinks to="contactanos">Contactanos</NavLinks>
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
