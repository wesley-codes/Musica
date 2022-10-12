import { Mobile } from "./../../Utility/Responsive/Mobile";
import { StyledButton } from "./../Button/Button.styles";
import styled, { css } from "styled-components";
import lead from "../Assets/Lead.png";
import Button from "../Button/Button";
import PlayAllSVG from "../SVG/PlayAllSVG";
import CollectionSVG from "../SVG/CollectionSVG";
import HeartSVG from "../SVG/HeartSVG";
import { CircleAvatar } from "../CardPlayer/CardPlayer.styles";

export const Banner = styled.div`
  display: flex;
  margin-top: 1rem;

  ${Mobile({ flexDirection: "column" })}
`;

export const ImageContainer = styled.div`
  ${Mobile({ width: "100%" })}
`;

export const Image = styled.img`
  object-fit: cover;
  ${Mobile({ width: "100%" })}
`;

export const BannerInfo = styled.div`
  margin: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-weight: 700;
    font-size: 35px;
    color: #a4c7c6;

    ${Mobile({ margin: "15px 0" })}
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #efeee0;
  }

  ${Mobile({ justifyContent: "flex-start", width: "100%", margin: "0" })}
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  ${Mobile({ margin: "15px 0", justifyContent: "space-between" })}
`;

export const PlayListButton = styled(StyledButton)<any>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  padding: 10px;
  margin-right: 15px;
  display: ${(props) => props.like && "none"};
  p {
    margin: 0 10px;
    ${Mobile({ margin: "0 8px", padding: "0px", fontSize: "12px" })}
  }

  ${Mobile({ margin: "0", padding: "8px" })};

  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.like &&
      css`
        display: flex;
      `}
  }
  //removing the p tag on samsung fold
  @media only screen and (max-width: 280px) {
    p {
      display: none;
    }
  }
`;

export const PlayAllIcon = styled(PlayAllSVG)``;

export const CollectionIcon = styled(CollectionSVG)``;

export const HeartIcon = styled(HeartSVG)`
  fill: #e5524a;
  width: 15px;
  height: 15px;
`;

export const HeartAvatar = styled(CircleAvatar)`
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
  border: none;
  justify-content: center;

  p {
    display: none;
    ${Mobile({ display: "block", margin: "0 0px" })}
  }
  ${Mobile({ display: "none" })}
`;
