import React from "react";
import { Link , useResolvedPath, useLocation, useMatch} from "react-router-dom";
import PlaylistSVG from "../SVG/PlaylistSVG";
import {
  HomeLogo,
  Logo,
  LogoContainer,
  LogoutIcon,
  MusicVideoIcon,
  NavContainer,
  PlaylistIcon,
  ProfileIcon,
  RadioIcon,
  SideBarContainer,
} from "./SideBar.styles";

const SideBar = () => {
const location = useLocation()
let resolved = useResolvedPath(location.pathname)
let match = useMatch({path: resolved.pathname, end: true })


  return (
    <SideBarContainer>
      <LogoContainer>
       <Link to="/">
       <Logo />
       </Link>
      </LogoContainer>

      <NavContainer>
        <LogoContainer>
        <Link to="/">
        <HomeLogo  match={match?.pathname}/>
        </Link>
        </LogoContainer>

        <LogoContainer first>
         <Link to="/collection">
         <PlaylistIcon  match={match?.pathname}/>
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
