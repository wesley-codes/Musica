import React, { useEffect, useRef, useState } from "react";
import {
  ArtistName,
  FirstContainer,
  IconBox,
  IconContainer,
  NextIcon,
  PauseIcon,
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
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Features/Store";
import { AppDispatch } from "../../Features/Store";
import {
  nextSongHandler,
  playPauseHandler,
  prevSongHandler,
  repeatHandler,
} from "../../Features/SongSlice";

type ControlTypes = {
  playing: boolean;
};

const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const [player, setPlayer] = useState<ControlTypes>({
    playing: false,
  });
  //Redux Selector states

  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const { activeSong, songList, playing, repeat } = useAppSelector(
    (state) => state.song
  );

  const onPlayPauseHandler = () => {
    dispatch(playPauseHandler());
  };

  const nextSong = () => {
    dispatch(nextSongHandler());
  };

  const prevSong = () => {
    dispatch(prevSongHandler());
  };

  useEffect(() => {
    if (playing) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [playing, activeSong]);

  const onRepeatHandler = () => {
    dispatch(repeatHandler());
  };

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

            <IconBox onClick={prevSong}>
              <PreviousIcon />
            </IconBox>

            <IconBox play onClick={onPlayPauseHandler}>
              {playing ? <PauseIcon /> : <PlayIcon />}
            </IconBox>

            <IconBox onClick={nextSong}>
              <NextIcon />
            </IconBox>

            <IconBox onClick={onRepeatHandler}>
              {repeat ? (
                <RepeatIcon fill="#FACD66" />
              ) : (
                <RepeatIcon fill="#fff" />
              )}
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
        <audio src={activeSong.url} ref={audioRef} loop={repeat} />
      </Wrapper>
    </PlayerContainer>
  );
};

export default Player;
