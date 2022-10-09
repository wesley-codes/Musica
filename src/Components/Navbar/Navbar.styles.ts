import { Mobile } from "./../../Utility/Responsive/Mobile";
import styled, { css } from "styled-components";
import SearchSVG from "../SVG/SearchSVG";
import LogoSVG from "../SVG/logoSVG";
import MenuSVG from "../SVG/MenuSVG";

export const NavbarContainer = styled.nav`
  background: #1d2123;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  position: sticky;
  left: 78px;
  height: 3.5rem;

  ${Mobile({ position: "relative", left: "0", height:"3rem" , padding:"10px 15px"})}
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
  background: #1d2123;
  outline: none;
  border: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
    text-align: center;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const SearchIcon = styled(SearchSVG)`
  position: absolute;
  left: 15px;
  fill: rgba(255, 255, 255, 0.25);

  ${Mobile({position:"relative", left:"0"})}
`;

export const NavContainer__Inner = styled.div`
display: none;
${Mobile({display: "flex", width:"100%", justifyContent:"space-between"})}

`


export const LogoContainer = styled.div<any>`

${
  props => props.margin && css`
  margin-right: 12px;
  `
}

`

export const Logo = styled(LogoSVG)``


export const HambugerMenu = styled(MenuSVG)``


