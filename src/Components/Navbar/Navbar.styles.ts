import { Mobile } from "./../../Utility/Responsive/Mobile";
import styled, { css } from "styled-components";
import SearchSVG from "../SVG/SearchSVG";
import LogoSVG from "../SVG/logoSVG";
import MenuSVG from "../SVG/MenuSVG";

{
  console.log();
}

export const NavbarContainer = styled.nav<any>`
  background: ${window.location.pathname === "/playlist"
    ? "transparent"
    : "#1D2123"};
  padding: 10px 30px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 40;
  left: 78px;
  top:0;
  height: 3.5rem;
  width: calc(100% - 78px);

  ${Mobile({
    position: "relative",
    height: "3rem",
    padding: "10px 0",
    width: "100%",
    left: "0",
  })};

  ${(props) =>
    props.sm &&
    css`
      @media only screen and (max-width: 768px) {
        display: none;
      }
    `}
`;

export const NavBox = styled.div`
  ${Mobile({ display: "none" })}
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  position: relative;
  padding: 8px;
  text-align: center;
  background: transparent;
  outline: none;
  border: none;
  &::placeholder {
    text-align: center;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const SearchIcon = styled(SearchSVG)`
  position: absolute;
  left: 15px;
  fill: rgba(255, 255, 255, 0.25);

  ${Mobile({ position: "relative", left: "0" })}
`;

export const NavContainer__Inner = styled.div`
  display: none;
  ${Mobile({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    padding: "10px",
  })}
`;

export const LogoContainer = styled.div<any>`
  ${(props) =>
    props.margin &&
    css`
      margin-right: 12px;
    `}
`;

export const Logo = styled(LogoSVG)``;

export const HambugerMenu = styled(MenuSVG)``;
