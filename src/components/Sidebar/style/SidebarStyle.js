import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Styled component para el Sidebar
export const SidebarContainer = styled.div`
  width: ${(props) => (props.open ? "240px" : "80px")};
  background-color: #fff;
  color: #fff;
  transition: width 0.3s ease;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const LogoContainer = styled.div`
  position: relative;
  top: 10px;
  width: 100%;
  height: 120px;
  overflow: hidden;
  align-self: center;
`;

export const LogoClose = styled.img`
  width: 40px;
  padding: 20px;
  opacity: ${(props) => (props.open ? "0" : "1")};
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: scale(0.8) translateY(20px);
`;

export const LogoOpen = styled.img`
  width: 180px;
  padding: 30px;
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1) translateY(0);
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
  margin-top: 50px;
`;

export const StyledSidebarItem = styled(Link)`
  display: flex;
  align-items:center;
  padding: 15px;
  text-decoration: none;
  transition: background-color 0.2s ease;
  margin: 5px 10px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.$isSelected ? "var(--primary-color)" : "transparent"};
  color: ${(props) => (props.$isSelected ? "#fff" : "var(--secondary-color)")};
  overflow: hidden;

  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
`;

// Styled component para el icono
export const Icon = styled.span`
  font-size: var(--icon-size);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width:30px;
`;

// Styled component para la etiqueta del item
export const Label = styled.span`
  display: inline-block;
  opacity: ${(props) => (props.$sidebarOpen ? "1" : "0")};
  margin-left: ${(props) => (props.$sidebarOpen ? "10px" : "0")};
`;

// Estilo del ícono de chevron en cada item
export const ChevronIconRight = styled(FontAwesomeIcon)`
  margin-left: auto;
  font-size: 10px;
`;

//Estilo contenedor UserInfo
export const UserContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin: 15px;
  border-radius: 10px;
  transition: padding 0.3s ease;
  overflow: hidden;
  text-decoration: none;
`;

// Estilo del avatar
export const Avatar = styled.img`
  width: ${({ $sidebarOpen }) => ($sidebarOpen ? "40px" : "50px")};
  height: ${({ $sidebarOpen }) => ($sidebarOpen ? "40px" : "50px")};
  background-color: red;
  border-radius: 50%;
  transition: width 0.3s ease, height 0.3s ease;
`;

//Estilo contenedor UserInfo
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content:center;
  flex-grow: 1;
`;

// Estilo del texto que aparece al lado del avatar
export const NameUser = styled.span`
  color: var(--primary-color);
  font-weight: bold;
  font-size: 12px;
  margin-left: 10px;
  transition: opacity 0.5s ease, margin-left 0.5s ease;
  white-space: nowrap;
  overflow: hidden;
  opacity: ${({ $sidebarOpen }) => ($sidebarOpen ? "1" : "0")};
`;

// Estilo del rol (Comercial Noroeste)
export const RoleJob = styled.span`
  color: var(--primary-color);
  font-weight: normal;
  font-size: 12px;
  margin-left: 10px;
  transition: opacity 0.5s ease, margin-left 0.5s ease;
  white-space: nowrap;
  overflow: hidden;
  opacity: ${({ $sidebarOpen }) => ($sidebarOpen ? "1" : "0")};
`;

// Estilo del ícono de chevron
export const ChevronIconDown = styled(FontAwesomeIcon)`
  color: var(--primary-color);
  margin-left: auto;
  font-size: 10px;
`;
