import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../../Utility/Responsive/Mobile'
import PlaylistBanner from '../PlaylistBanner/PlaylistBanner'
import lead from "../Assets/Lead.png"
import Navbar from '../Navbar/Navbar'
import PlaylistCard from '../PlaylistCard/PlaylistCard'
import AnimatedRoute from '../AnimatedRoute/AnimatedRoute'

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
  margin-top: 5rem;
  
  ${Mobile({ flexDirection: "column" , marginTop:"5rem"})}

`

const PlayListWrapper = styled.div`
margin: 3rem 0;
${Mobile({margin:"1rem 0"})}
`


const Playlist = () => {
  return (
    <AnimatedRoute>
        <PlaylistContainer>
        <Navbar sm/>
     <Container>
      <PlaylistBanner/>
      <PlayListWrapper>
      <PlaylistCard/>
      <PlaylistCard/>
      <PlaylistCard/>
      <PlaylistCard/>
      <PlaylistCard/>
      <PlaylistCard/>
      <PlaylistCard/>
      <PlaylistCard/>
      <PlaylistCard/>
      <PlaylistCard/>
      <PlaylistCard/>
      <PlaylistCard/>
      <PlaylistCard/>
      <PlaylistCard/>
      <PlaylistCard/>

      </PlayListWrapper>
    </Container>
   </PlaylistContainer>
    </AnimatedRoute>
  )
}

export default Playlist
