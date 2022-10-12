import React,{useEffect} from "react";
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

  setSideBar?: React.Dispatch<React.SetStateAction<boolean>>
  sm? : boolean
}



const Navbar = ({setSideBar, sm}:NavBarProps) => {



const openSideBar = ()=>{
   setSideBar!(true)

}

  return (
    <NavbarContainer sm={sm}>
      <NavContainer__Inner>
        <div
          style={{
            display: "flex",
            justifyContent: "cent",
            alignItems: "center",
          }}
        >
          <LogoContainer margin>
            <HambugerMenu  onClick={openSideBar} />
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
