import React from "react";
import PlaylistSVG from "../SVG/PlaylistSVG";
import {
  HomeLogo,
  Logo,
  LogoContainer,
  NavContainer,
  SideBarContainer,
} from "./SideBar.styles";

const SideBar = () => {
  return (
    <SideBarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <NavContainer>
        <LogoContainer>
          <HomeLogo />
        </LogoContainer>

        <LogoContainer first>
          <PlaylistSVG />
        </LogoContainer>

        <LogoContainer first>
          <PlaylistSVG />
        </LogoContainer>

        <LogoContainer first>
          <PlaylistSVG />
        </LogoContainer>
      </NavContainer>

      <NavContainer secondBox>
        <LogoContainer second>
          <PlaylistSVG />
        </LogoContainer>

        <LogoContainer second>
          <PlaylistSVG />
        </LogoContainer>
      </NavContainer>
    </SideBarContainer>
  );
};

export default SideBar;
