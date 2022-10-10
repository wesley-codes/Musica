import React from "react";
import {
  CardContainer,
  CardThumbnailContainer,
  SongName,
  Thumbnail,
} from "./Card.styles";
import Album1 from "../Assets/Album1.png";
import Album2 from "../Assets/Album2.png";
import Album3 from "../Assets/Album3.png";
import Album4 from "../Assets/Album4.png";
import Album5 from "../Assets/Album5.png";
import Album6 from "../Assets/Album6.png";
import Album7 from "../Assets/Album7.png";
import Album8 from "../Assets/Album8.png";
import Album9 from "../Assets/Album9.png";
import Album10 from "../Assets/Album10.png";
import { ArtistName, SongDuration } from "../CardPlayer/CardPlayer.styles";

const Card = () => {
  return (
    <CardContainer>
      <CardThumbnailContainer>
        <Thumbnail src={Album1} />
      </CardThumbnailContainer>
      <SongDuration>Life in a bubble</SongDuration>
      <ArtistName>The van</ArtistName>
    </CardContainer>
  );
};

export default Card;
