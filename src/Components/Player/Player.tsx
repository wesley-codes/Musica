import React,{useRef} from "react";
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
import Song1 from "../Assets/music/song1.mp3";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../Features/Store";

const Player = () => {
const audioRef = useRef<HTMLAudioElement>(null)
//Redux Selector states

const useAppSelector:TypedUseSelectorHook<RootState>= useSelector

const {activeSong, songList} = useAppSelector(state => state.song)

const play = () =>{
  audioRef.current?.play()
}

console.log(songList)


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
            <Thumbnail src={activeSong.cover} />
          </ThumbnailContainer>

          <div>
            <SongName>{activeSong.songName}</SongName>
            <ArtistName> {activeSong.artistName}</ArtistName>
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
              <PlayIcon  onClick={play}/>
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
        <audio src={activeSong!?.url} controls ref={audioRef}/>
      </Wrapper>
    </PlayerContainer>
  );
};

export default Player;
