import React from "react";
import {
  ArtistName,
  FirstContainer,
  IconBox,
  IconContainer,
  NextIcon,
  PlayerContainer,
  PlayIcon,
  PreviousIcon,
  RepeatIcon,
  SecondContainer,
  ShuffleIcon,
  Slider,
  SliderContainer,
  SongName,
  ThirdContainer,
  Thumbnail,
  ThumbnailContainer,
  VolumeIcon,
  Wrapper,
} from "./Player.styles";
import Song from "../Assets/Album2.png";
const Player = () => {
  const makeLongShadow = (color: string, size: number) => {
    let i = 18;
    let shadow = `${i}px 0 0 ${size} ${color}`;

    for (; i < 706; i++) {
      shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
    }

    return shadow;
  };

  return (
    <PlayerContainer>
      <Wrapper>
        <FirstContainer>
          <ThumbnailContainer>
            <Thumbnail src={Song} />
          </ThumbnailContainer>

          <div>
            <SongName>Seasons in</SongName>
            <ArtistName> James</ArtistName>
          </div>
        </FirstContainer>
        <SecondContainer>
          <IconContainer>
            <IconBox>
              <ShuffleIcon />
            </IconBox>

            <IconBox>
              <PreviousIcon />
            </IconBox>

            <IconBox play>
              <PlayIcon />
            </IconBox>

            <IconBox>
              <NextIcon />
            </IconBox>

            <IconBox>
              <RepeatIcon />
            </IconBox>
          </IconContainer>

          <SliderContainer>
            <Slider type="range" func={makeLongShadow} />
          </SliderContainer>
        </SecondContainer>
        <ThirdContainer>
          <div>
            <VolumeIcon />
            <Slider type="range" volume />
          </div>
        </ThirdContainer>
      </Wrapper>
    </PlayerContainer>
  );
};

export default Player;
