import React from "react";
import {
  HambugerMenu,
  InputContainer,
  Logo,
  LogoContainer,
  NavbarContainer,
  NavBox,
  NavContainer__Inner,
  SearchIcon,
  SearchInput,
} from "./Navbar.styles";

interface NavBarProps {

  setSideBar : React.Dispatch<React.SetStateAction<boolean>>
}


const Navbar = ({setSideBar}:NavBarProps) => {



  return (
    <NavbarContainer>
      <NavContainer__Inner>
        <div
          style={{
            display: "flex",
            justifyContent: "cent",
            alignItems: "center",
          }}
        >
          <LogoContainer margin>
            <HambugerMenu  onClick={()=> setSideBar(true)} />
          </LogoContainer>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </div>

        <LogoContainer>
          <SearchIcon />
        </LogoContainer>
      </NavContainer__Inner>
      <NavBox>
        <InputContainer>
          <SearchInput placeholder="Search" />
          <SearchIcon />
        </InputContainer>
      </NavBox>
    </NavbarContainer>
  );
};

export default Navbar;
