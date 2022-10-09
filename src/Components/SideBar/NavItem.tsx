import React from 'react'
import { HomeLogo, LinkItem, Subtitle, SubtitleContainer } from './SideBar.styles'

 interface NavItemProps {
title : string
svg : JSX.Element

 }


const NavItem = ({title, svg}: NavItemProps) => {
  return (
    <React.Fragment>
        <LinkItem>
        {svg}
            <SubtitleContainer>
            <Subtitle> {title}</Subtitle>

            </SubtitleContainer>
            </LinkItem>
    </React.Fragment>
  )
}

export default NavItem
