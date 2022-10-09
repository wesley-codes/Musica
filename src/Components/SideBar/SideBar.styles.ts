import { Mobile } from './../../Utility/Responsive/Mobile';
import styled, { css } from "styled-components";
import HomeSVG from "../SVG/HomeSVG";
import LogoSVG from "../SVG/logoSVG";
import PlaylistSVG from "../SVG/PlaylistSVG";
import RadioSVG from '../SVG/RadioSVG';
import MusicVideoSVG from '../SVG/MusicVideoSVG';
import ProfileSVG from '../SVG/ProfileSVG';
import LogoutSVG from '../SVG/LogoutSVG';
import { motion } from 'framer-motion';
export const SideBarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 60px;
  background: #1d2123;
  padding: 20px 10px;
  z-index: 99;
  transition: all 0.5s ease;
  ${Mobile({display: "none"})}
`;

export const LogoContainer = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.first &&
    css`
      padding: 1rem 0;
    `}

  ${(props) =>
    props.second &&
    css`
      padding: 1rem 0;
    `}
`;

export const Logo = styled(LogoSVG)``;

export const NavContainer = styled.div<any>`
  background: #1a1e1f;
  border-radius: 32px;
  padding: 1.5rem 0;
  margin: 2rem 0px;

  ${(props) => props.secondBox && css``}
`;

export const HomeLogo = styled(HomeSVG)``;

export const Playlist = styled(PlaylistSVG)``;

export const RadioIcon = styled(RadioSVG)``;

export const MusicVideoIcon = styled(MusicVideoSVG)``

export const ProfileIcon = styled(ProfileSVG)`
fill: rgba(239, 238, 224, 0.25);
`

export const LogoutIcon = styled(LogoutSVG)`
fill: rgba(239, 238, 224, 0.25);

`

export const SideContainer = styled(motion.div)`
height: 100%;
    width: 70%;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    background: #1E1E1E; 
       overflow-x: hidden;
    transition: 0.35s;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding:4rem 2rem;

    

`

export const InnerContainer = styled.ul`
padding-left: 0;
width: 100%;
`

export const LinkItem = styled.li`
list-style-type: none;
display: flex;
align-items: center;
margin: 1.5rem 0;


`

export const SubtitleContainer = styled.div`
display: flex;
align-items: center;
margin: 0 10px ;
`

export const Subtitle = styled.p`
color: rgba(239, 238, 224, 0.25);
font-weight: 700;
font-size: 17px;
`