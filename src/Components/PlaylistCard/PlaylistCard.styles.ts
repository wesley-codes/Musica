import { Mobile } from "./../../Utility/Responsive/Mobile";
import styled from "styled-components";
import DetailSVG from "../SVG/DetailSVG";
import HeartSVG from "../SVG/HeartSVG";

export const CardContainer = styled.div`
  background: rgba(51, 55, 59, 0.37);
  backdrop-filter: blur(5px);

  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  margin: 1rem 0;

  p {
    font-weight: 400;
    font-size: 12px;
    color: #fff;
    text-align: center;
    word-wrap: break-word;

    ${Mobile({ margin: "5px 0", textAlign: "left" })}
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ThumbnailContainer = styled.div<any>`
  position: relative;
  ${Mobile({})}
`;

export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 1rem;
  
  ${Mobile({})}

`;

export const IconContainer = styled.div`
  margin-left: 15px;
  ${Mobile({ display: "none" })}
`;

export const HeartIcon = styled(HeartSVG)`
  width: 15px;
  height: 15px;
  cursor: pointer;
  fill: transparent;
`;

export const DetailIcon = styled(DetailSVG)``;

export const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
width: 20%;
  ${Mobile({
    flexDirection: "column",
    textAlign: "start",
    alignItems: "flex-start",
    marginLeft: "10px",
  })}
`;

export const SongTypeBox = styled.div``

export const ThirdContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;

  ${Mobile({
    flexDirection: "column-reverse",
    textAlign: "start",
    alignItems: "flex-end",
  })}
`;
