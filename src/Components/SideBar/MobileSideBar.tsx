import React, { useState } from "react";
import Modal from "../Modal/Modal";
import RadioSVG from "../SVG/RadioSVG";
import NavItem from "./NavItem";
import { Link, useResolvedPath, useLocation, useMatch } from "react-router-dom";

import {
  HomeLogo,
  InnerContainer,
  LinkItem,
  LogoutIcon,
  MusicVideoIcon,
  PlaylistIcon,
  ProfileIcon,
  RadioIcon,
  SideContainer,
  Subtitle,
  SubtitleContainer,
} from "./SideBar.styles";
interface MobileSideBarProps {
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSideBar = ({ setSideBar }: MobileSideBarProps) => {
  const location = useLocation();
  let resolved = useResolvedPath(location.pathname);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <React.Fragment>
      <SideContainer animate={{ x: 0 }} initial={{ x: "-100vw" }}>
        <InnerContainer>
          <NavItem
            to="/"
            title="Home"
            svg={<HomeLogo match={match?.pathname} />}
          />

          <NavItem
            to="/collection"
            title="My collections"
            svg={<PlaylistIcon match={match?.pathname} />}
          />

          <NavItem title="Radio" svg={<RadioIcon />} />

          <NavItem title="Music videos" svg={<MusicVideoIcon />} />

          <NavItem title="Profile" svg={<ProfileIcon />} />

          <NavItem title="Log out" svg={<LogoutIcon />} />
        </InnerContainer>
      </SideContainer>
    </React.Fragment>
  );
};

export default MobileSideBar;
