import React from "react";
import {
  ClosingIcon,
  SideBarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SideElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ClosingIcon fontSize="large" />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="nosotros" onClick={toggle}>
            Nosotros
          </SidebarLink>
          <SidebarLink to="servicios" onClick={toggle}>
            Servicios
          </SidebarLink>
          <SidebarLink to="convenios" onClick={toggle}>
            Convenios
          </SidebarLink>
          <SidebarLink to="contactanos" onClick={toggle}>
            Contactanos
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/llamar">Llamanos</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
