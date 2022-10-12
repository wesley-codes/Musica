import React from "react";
import { Link, LinkProps } from "react-router-dom";
import {
  HomeLogo,
  LinkItem,
  Subtitle,
  SubtitleContainer,
} from "./SideBar.styles";

interface NavItemProps {
  title: string;
  svg: JSX.Element;
  to?:string
}

const NavItem = ({ title, svg, to }: NavItemProps) => {



  
  return (
    <React.Fragment>
     <Link to={to!} style={{textDecoration:"none"}}>
     
     <LinkItem>
        {svg}
        <SubtitleContainer>
          <Subtitle> {title}</Subtitle>
        </SubtitleContainer>
      </LinkItem>
     </Link>
    </React.Fragment>
  );
};

export default NavItem;
