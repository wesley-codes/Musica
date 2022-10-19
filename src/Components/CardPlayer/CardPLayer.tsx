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
import { Link } from "react-router-dom";

interface CardPlayerProp {
  thumbnail: string;
}

const CardPLayer = ({ thumbnail }: CardPlayerProp) => {
  return (
    <CardPlayerContainer>
      <FirstContainer>
        <ThummbnailContainer>
          <Thumbnail src={thumbnail} />
        </ThummbnailContainer>

        <CenterContainer>
          <Link to="/playlist" style={{ textDecoration: "none" }}>
            <SongName> Golden age of 80s</SongName>
          </Link>

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
