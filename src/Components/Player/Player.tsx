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
  onSongEnded,
  playPauseHandler,
  prevSongHandler,
  repeatHandler,
  shuffleHandler,
} from "../../Features/SongSlice";

type ControlTypes = {
  playing: boolean;
};

const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null)!;
  const sliderRef = React.useRef<HTMLInputElement>(null)!;
  const volumeRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  //Redux Selector states

  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const [duration, setDuration] = useState(1);
  const [currentTime, setCurrentTime] = useState();
  const [percentage, setPercentage] = useState<Number>(0);
  const [volume, setvolume] = useState(0.5);
  const { activeSong, playing, repeat, shuffle, songEnded } = useAppSelector(
    (state) => state.song
  );

  useEffect(() => {
    if (playing) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [playing, activeSong]);


  // useEffect(() => {
  //   console.log(  audioRef.current!.volume = +volumeRef.current!.value
  //     )  }, [volume]);

  const onRepeatHandler = () => {
    dispatch(repeatHandler());
  };

  const onPlayPauseHandler = () => {
    dispatch(playPauseHandler());
  };

  const nextSong = () => {
    dispatch(nextSongHandler());
  };

  const prevSong = () => {
    dispatch(prevSongHandler());
  };

  const onShuffleHandler = () => {
    dispatch(shuffleHandler());
  };

  const songEndHandler = () => {
    console.log("song ended");
    dispatch(onSongEnded(true));
  };

  const changeRange = (e: any) => {
    console.log((audioRef.current!.duration / 100) * e.target.value);
    audioRef.current!.currentTime =
      (audioRef.current!.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const getCurrDuration = (e: any) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);

    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));

    const fillLeft = "#FACD66";
    const fillRight = "rgba(255, 255, 255, 0.04)";

    sliderRef.current!.style.background = `linear-gradient(to right, ${fillLeft} ${percent}%, ${fillRight} ${percent}%`;
  };

useEffect(()=>{
  const fillLeft = "#FACD66";
  const fillRight = "transparent";

   volumeRef.current!.style.background = `linear-gradient(to right, ${fillLeft} ${+volumeRef.current!.value}%, ${fillRight} ${+volumeRef.current!.value}%`;
},[volume])

  const volumeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    audioRef.current!.volume = +volumeRef.current!.value/100

   setvolume(audioRef.current!.volume)
  };
  return (
    <React.Fragment>
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
              <IconBox onClick={onShuffleHandler}>
                {shuffle ? (
                  <ShuffleIcon fill="#FACD66" />
                ) : (
                  <ShuffleIcon fill="#fff" />
                )}
              </IconBox>

              <IconBox onClick={prevSong}>
                <PreviousIcon />
              </IconBox>

              <IconBox play onClick={onPlayPauseHandler}>
                {playing ? (
                  <PauseIcon fill="#fff" width={15} height={15} />
                ) : (
                  <PlayIcon width={15} height={15} fill="#fff" />
                )}
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

            <SliderContainer track>
              <Slider
                ref={sliderRef}
                type="range"
                onChange={changeRange}
                value={percentage}
              />
            </SliderContainer>
          </SecondContainer>
          <ThirdContainer>
              <VolumeIcon />
              <Slider
                type="range"
                volume
                ref={volumeRef}
//value={volume}
                onChange={volumeHandler}
              />
          </ThirdContainer>
          <audio
            src={activeSong.url}
            // src={Song1}
            ref={audioRef}
            loop={repeat}
            onEnded={songEndHandler}
            onTimeUpdate={getCurrDuration}
            onLoadedData={(e: any) => {
              setDuration(e.currentTarget.duration.toFixed(2));
            }}
          />
        </Wrapper>
      </PlayerContainer>
    </React.Fragment>
  );
};

export default Player;
