import React from "react";
import {
  ArtistName,
  CardPlayerContainer,
  CenterContainer,
  CircleAvatar,
  FavoriteIcon,
  FirstContainer,
  SecondContainer,
  SongDuration,
  SongName,
  Thumbnail,
  ThummbnailContainer,
} from "./CardPlayer.styles";
import Image from "../Assets/Image1.png";
const CardPLayer = () => {
  return (
    <CardPlayerContainer>
      <FirstContainer>
        <ThummbnailContainer>
          <Thumbnail src={Image} />
        </ThummbnailContainer>

        <CenterContainer>
          <SongName> Golden age of 80s</SongName>
          <ArtistName>Sean swadder</ArtistName>

          <SongDuration>2:34:45</SongDuration>
        </CenterContainer>
      </FirstContainer>
      <SecondContainer>
        <CircleAvatar>
          <FavoriteIcon />
        </CircleAvatar>
      </SecondContainer>
    </CardPlayerContainer>
  );
};

export default CardPLayer;
