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
import { CardPlayerProp, PlaylistType } from "../../Types/LocalDataTypes";



const CardPLayer = ({ cover, id, title, files }: CardPlayerProp) => {
  const data: CardPlayerProp = {
    id,
    cover,
    title,
    files,
  };

  return (
    <CardPlayerContainer>
      <FirstContainer>
        <ThummbnailContainer>
          <Thumbnail src={cover } />
        </ThummbnailContainer>

        <CenterContainer>
          <Link to={`/playlist/${id}`} state={data} style={{ textDecoration: "none" }}>
            <SongName> {id}</SongName>
          </Link>

          <ArtistName>{title}</ArtistName>

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
