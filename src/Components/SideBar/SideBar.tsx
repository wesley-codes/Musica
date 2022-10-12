import React from "react";
import { Link } from "react-router-dom";
import PlaylistSVG from "../SVG/PlaylistSVG";
import {
  HomeLogo,
  Logo,
  LogoContainer,
  LogoutIcon,
  MusicVideoIcon,
  NavContainer,
  ProfileIcon,
  RadioIcon,
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
        <Link to="/">
        <HomeLogo />
        </Link>
        </LogoContainer>

        <LogoContainer first>
         <Link to="/playlist">
         <PlaylistSVG />
         </Link>
        </LogoContainer>

        <LogoContainer first>
          <RadioIcon />
        </LogoContainer>

        <LogoContainer first>
          <MusicVideoIcon />
        </LogoContainer>
      </NavContainer>

      <NavContainer secondBox>
        <LogoContainer second>
          <ProfileIcon />
        </LogoContainer>

        <LogoContainer second>
          <LogoutIcon />
        </LogoContainer>
      </NavContainer>
    </SideBarContainer>
  );
};

export default SideBar;
