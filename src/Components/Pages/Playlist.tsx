import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../../Utility/Responsive/Mobile'
import PlaylistBanner from '../PlaylistBanner/PlaylistBanner'
import lead from "../Assets/Lead.png"
import Navbar from '../Navbar/Navbar'

const PlaylistContainer = styled.div`
padding: 15px;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 90;
min-height: 95vh;
background: linear-gradient(180deg, rgba(29, 33, 35, 0.7) 0%, #1D2123 61.48%), url(${lead});
background-size: cover;
background-position: center;
object-fit: cover;
  background-repeat: no-repeat;

  ${Mobile({zIndex: "0"})}
`


const Container = styled.div`
display: flex;
  margin-top: 5rem;
  
  ${Mobile({ flexDirection: "column" })}

`



const Playlist = () => {
  return (
      <PlaylistContainer>
        <Navbar sm/>
     <Container>
      <PlaylistBanner/>
    </Container>
   </PlaylistContainer>
  )
}

export default Playlist
