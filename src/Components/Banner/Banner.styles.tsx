import styled from "styled-components";
import { motion } from "framer-motion";
import { Mobile } from "../../Utility/Responsive/Mobile";
import HeartSVG from "../SVG/HeartSVG";

export const BannerContainer = styled.div`
  background: #609eaf;
  border-radius: 40px;
  height: 373px;
  display: flex;
  flex: 4;
  position: relative;
  

  ${Mobile({borderRadius:"20px", position:"relative", flexDirection:"row-reverse"})}
`;


export const MobileVectorcontainer = styled.div`
 position: absolute;
;
`

export const MobileVector = styled.img`
display: none;
${Mobile({position: "absolute", display: "block"
})}

`

export const InfoContainer = styled.div`
  padding: 2rem;
  padding-right: 10px;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopContainer = styled.div`
  p {
    font-weight: 400;
    font-size: 12px;
    color: #fff;
  }
`;

export const CenterContainer = styled.div`
word-wrap: break-word;

  h2 {
    font-weight: 700;
    font-size: 35px;
    color: #ffffff;
  }
  p{
    font-weight: 400;
font-size: 14px;
line-height: 120%;
color: #ffffff;
flex: none;
order: 1;
flex-grow: 0;

  }
  ${Mobile({marginTop:"10rem" , marginBottom:"15px"})}
`;

export const BottomContainer = styled.div`
display: flex;
align-items: center;
position: relative;
/* justify-content: space-evenly; */
p{
  font-weight: 400;
font-size: 14px;
color: #fff;
margin-left:10px ;
}
`;

export const ArtContainer = styled.div`
  position: relative;
`;

export const VectorContainer = styled(motion.div)`
  ${Mobile({display:"none"})}

`;

export const VectorImage = styled.img`
  border-radius: 40px;
`;

export const ImageContainer = styled(motion.div)`
  position: absolute;
  left: 130px;
  top: 0;
  ${Mobile({display:"none"})}
`;

export const GuyMan = styled(motion.img)`
  position: absolute;
`;


export const AvatarContainer = styled.div`
display: flex;
align-items: center;
position: relative;
`


export const Avatar1 = styled.img`
position: relative;
left: 0;
`

export const Avatar2 = styled.img`
position: absolute;
left: 20px;

`

export const Avatar3 = styled.img`
position: absolute;
left: 40px;

`
export const Avatar4 = styled.img`
position: absolute;
left: 60px;

`
export const Avatar5 = styled.img`
position: absolute;
left: 80px;

`



export const HeartIcon = styled(HeartSVG)`
  
`

export const Wrapper = styled.div`
display: flex;
align-items: center;
margin-left:  7rem;


`