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
import Album8 from "../Assets/Album8.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Features/Store";
import { activeSongHandler } from "../../Features/SongSlice";

interface PlaylistCardProps {
  title: string;
  cover: string;
  url: string;
  banner?: string;
}

const PlaylistCard = ({ title, cover, url, banner }: PlaylistCardProps) => {

const dispatch = useDispatch<AppDispatch>()

  const selectSongHandler = () => {
    const data = {
      title,
      cover,
      url,
      banner,
    };
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
        <p>{title}</p>
      </SecondContainer>

      <SongTypeBox>
        <p>Single</p>
      </SongTypeBox>

      <ThirdContainer>
        <p>4:17</p>

        <DetailIcon />
      </ThirdContainer>
    </CardContainer>
  );
};

export default PlaylistCard;
