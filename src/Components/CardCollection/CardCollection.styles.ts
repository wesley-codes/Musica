import styled from "styled-components";
import { Mobile } from "../../Utility/Responsive/Mobile";
import PlaySVG from "../SVG/PlaySVG";
import { motion } from "framer-motion";
export const CardBox = styled.div`
  position: relative;
  margin-right: 15px;
  ${Mobile({ width: "100%", marginBottom: "2rem", height: "250px" })}
`;

export const AlbumCover = styled(motion.img)`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 1rem;
  ${Mobile({ width: "100%", height: "250px" })}
`;

export const Container = styled(motion.div)`
  bottom: 10px;
  position: absolute;
  color: #fff;
  left: 10px;
  display: flex;
  ${Mobile({width:"90%", justifyContent:"space-between"})}
  h3 {
    font-weight: 400;
    font-size: 24px;
    opacity: 0.75;
    margin: 0;
  }

  p {
    font-weight: 400;
    font-size: 10px;
    opacity: 0.75;
  }
`;

export const CircleAvatar = styled.div`
width: 20px;
height:20px;
border-radius: 50px;
background-color: #B89751;
display: flex;
align-items: center;
justify-content: center;
display: none;

${Mobile({width:"50px", height:"50px", display:"flex", justifyContent:"center", alignItems:"center"})}

`;

export const PlayIcon = styled(PlaySVG)`
fill: #FACD66;
height: 20px;
height:20px;
${Mobile({width:"20px", height:"20px"})}
`