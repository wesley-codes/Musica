import React from "react";
import {
  CardContainer,
  Container,
  DetailIcon,
  HeartIcon,
  IconContainer,
  SecondContainer,
  SongTypeBox,
  ThirdContainer,
  Thumbnail,
  ThumbnailContainer,
} from "./PlaylistCard.styles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Features/Store";
import { activeSongHandler } from "../../Features/SongSlice";

interface PlaylistCardProps {
  id: string;
  cover: string;
  artistName: string | string[];
  songName: string;
  url: string;
  banner?: string
  duration : number
}

const PlaylistCard = ({ id ,cover , artistName, songName, url, banner, duration }: PlaylistCardProps) => {

const dispatch = useDispatch<AppDispatch>()

  const selectSongHandler = () => {
    const data = {
      id ,cover , artistName, songName, url, banner, duration
    };
   // console.log(data)
dispatch(activeSongHandler(data))
  };

  return (
    <CardContainer onClick={selectSongHandler}>
      <Container>
        <ThumbnailContainer>
          <Thumbnail src={cover || banner} />
        </ThumbnailContainer>
        <IconContainer>
          <HeartIcon />
        </IconContainer>
      </Container>

      <SecondContainer>
        <p>{songName}</p>
      </SecondContainer>

      <SongTypeBox>
        <p>Single</p>
      </SongTypeBox>

      <ThirdContainer>
        <p>{duration}</p>

        <DetailIcon />
      </ThirdContainer>
    </CardContainer>
  );
};

export default PlaylistCard;
