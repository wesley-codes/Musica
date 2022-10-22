import { Mobile } from "./../../Utility/Responsive/Mobile";
import styled, { css } from "styled-components";
import NextSVG from "../SVG/NextSVG";
import ShuffleSVG from "../SVG/ShuffleSVG";
import PreviousSVG from "../SVG/PreviousSVG";
import PlaySVG from "../SVG/PlaySVG";
import RepeatSVG from "../SVG/RepeatSVG";
import VolumeSVG from "../SVG/VolumeSVG";
import PauseSVG from "../SVG/PauseSVG";

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
  ${Mobile({ flex: "1", padding: "0px", justifyContent: "space-between" })}
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


export const Slider = styled.input<any>`


${
  css`
  
  width: 100%;
  -webkit-appearance: none; /* Override default CSS styles */
  --seek-before-width: 0;
  --seek-before-color: red;
  --knobby: #3452a5;
  --selectedKnobby: #26c9c3;
  --bar-bg: grey;
  outline: none;
  background: transparent;
  `
};

//for safari and browser
&::before{
  content: '';
  height: ${height};
  width: var(--seek-before-width);
  background-color: var(--seek-before-color);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
}

 
//safari browser
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: var(--bar-bg)
  };

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    appearance: none;
    height: 15px;
    width: 15px;
    background-color: var(--knobby);
    border-radius: 100%;
    border: none;
    top: 50%;
cursor: pointer; 
z-index:3;
box-sizing:border-box;
    transform: translateY(-50%);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.92);
    transition: background-color 150ms;
  };

  //active thumb slider chrome and safari
&:active::-webkit-slider-thumb{

  background-color: var(--selectedKnobby);
}

  //firefox browser
  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: var(--bar-bg);
  };

  &::-moz-range-progress {
    height: ${height};
    background-color: var(--seek-before-color);
    border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  };


  &::-moz-range-thumb{
    position: relative;
    appearance: none;
    height: 15px;
    width: 15px;
    background-color: var(--knobby);
    border-radius: 100%;
    border: none;
    top: 50%;
    cursor: pointer; 
    z-index:3;
    box-sizing:border-box;
    transform: translateY(-50%);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.92);
    transition: background-color 150ms;
  };

  &:active::-moz-range-thumb{
    background-color: var(--selectedKnobby);

  }

&::-moz-focus-outer{
  border: 0
};

  
  

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: var(--bar-bg);
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
  };

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

export const PauseIcon = styled(PauseSVG)``;

export const RepeatIcon = styled(RepeatSVG)<any>`
  ${Mobile({ display: "none" })}
`;

export const VolumeIcon = styled(VolumeSVG)`
  ${Mobile({ display: "none" })}
`;
