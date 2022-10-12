import { Mobile } from "./../../Utility/Responsive/Mobile";
import styled, { css } from "styled-components";
import NextSVG from "../SVG/NextSVG";
import ShuffleSVG from "../SVG/ShuffleSVG";
import PreviousSVG from "../SVG/PreviousSVG";
import PlaySVG from "../SVG/PlaySVG";
import RepeatSVG from "../SVG/RepeatSVG";
import VolumeSVG from "../SVG/VolumeSVG";

export const PlayerContainer = styled.div`
  height: 125px;
  width: 100%;
  position: fixed;
  z-index: 40;
  bottom: 0;
  display: flex;
  padding: 0 15px;
  background: rgba(29, 33, 35, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  ${Mobile({ height: "100px" })}
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;

  ${Mobile({ justifyContent: "space-between", width: "80%" })}
`;

export const FirstContainer = styled.div`
  flex: 2;
  padding: 0 15px;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  ${Mobile({ flex: "1" })}
`;

export const SecondContainer = styled.div`
  flex: 6;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  ${Mobile({ flex: "1", alignItems: "flex-end", justifyContent: "center" })}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-evenly;

  ${Mobile({ width: "100%" })}
`;

export const IconBox = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.play &&
    css`
      width: 30px;
      height: 30px;
      border-radius: 50px;
      background: #facd66;
      box-shadow: 0px 0px 18px rgba(255, 255, 255, 0.3);
    `}
`;

export const SliderContainer = styled.div`
  width: 100%;
`;

// excess height to improve interactive area / accessibility
const height = "4px";
const thumbHeight = 15;
const trackHeight = "4px";

// colours
const upperColor = "#2A2A2C";
const lowerColor = "#FACD66";
const thumbColor = "#FACD66";
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

export const Slider = styled.input<any>`
  width: 100%;
  -webkit-appearance: none; /* Override default CSS styles */
  background: transparent;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.92);
    transition: background-color 150ms;

    ${(props) =>
      props.volume &&
      css`
        display: none;
      `}
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    /* color needed to hide track marks */
  }

  &::-ms-fill-lower {
    background: ${lowerBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;

    ${(props) =>
      props.volume &&
      css`
        display: none;
      `};
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  ${Mobile({ display: "none" })}
`;

export const ThirdContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;

  div {
    display: flex;
  }

  ${Mobile({ display: "none" })}
`;

export const ThumbnailContainer = styled.div``;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
`;

export const SongName = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`;

export const ArtistName = styled.p`
  font-size: 10px;
  line-height: 120%;
  color: rgba(255, 255, 255, 0.44);
`;

export const NextIcon = styled(NextSVG)`
  ${Mobile({ marginLeft: "15px", fontSize: "1rem" })}
`;

export const ShuffleIcon = styled(ShuffleSVG)`
  ${Mobile({ display: "none" })}
`;

export const PreviousIcon = styled(PreviousSVG)`
  ${Mobile({ display: "none" })}
`;

export const PlayIcon = styled(PlaySVG)``;

export const RepeatIcon = styled(RepeatSVG)`
  ${Mobile({ display: "none" })}
`;

export const VolumeIcon = styled(VolumeSVG)`
  ${Mobile({ display: "none" })}
`;
