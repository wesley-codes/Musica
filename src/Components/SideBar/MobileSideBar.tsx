import React,{useState} from "react";
import Modal from "../Modal/Modal";
import RadioSVG from "../SVG/RadioSVG";
import NavItem from "./NavItem";
import {
  HomeLogo,
  InnerContainer,
  LinkItem,
  LogoutIcon,
  MusicVideoIcon,
  Playlist,
  ProfileIcon,
  RadioIcon,
  SideContainer,
  Subtitle,
  SubtitleContainer,
} from "./SideBar.styles";

const MobileSideBar = () => {

  return (
    <React.Fragment>

    
     <SideContainer>
        <InnerContainer>
          <NavItem title="Home" svg={<HomeLogo />} />

          <NavItem title="My collections" svg={<Playlist/>} />

          <NavItem title="Radio" svg={<RadioIcon/>} />

          <NavItem title="Music videos" svg={<MusicVideoIcon />} />

          <NavItem title="Profile" svg={<ProfileIcon />} />

          <NavItem title="Log out" svg={<LogoutIcon />} />
        </InnerContainer>
      </SideContainer>
     
    </React.Fragment>
  );
};

export default MobileSideBar;
