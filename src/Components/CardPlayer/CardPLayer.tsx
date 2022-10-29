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
import { Link, useNavigate } from "react-router-dom";
import { CardPlayerProp, PlaylistType } from "../../Types/LocalDataTypes";



const CardPLayer = ({ cover, id, title, files }: CardPlayerProp) => {
  const data: CardPlayerProp = {
    id,
    cover,
    title,
    files
  };

  const navigate = useNavigate()


  const moveToplaylist = ()=>{
    navigate(`/playlist/${id}`, {state : data})
  }
  return (
    <CardPlayerContainer onClick={moveToplaylist}>
      <FirstContainer>
        <ThummbnailContainer>
          <Thumbnail src={cover } />
        </ThummbnailContainer>

        <CenterContainer>
            <SongName> {id}</SongName>

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
