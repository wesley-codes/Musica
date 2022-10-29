import React from "react";
import {
  CardContainer,
  CardThumbnailContainer,
  SongName,
  Thumbnail,
} from "./Card.styles";

import { ArtistName, SongDuration } from "../CardPlayer/CardPlayer.styles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Features/Store";
import { activeSongHandler } from "../../Features/SongSlice";
import { Action, Hub } from "../../Types/PopularTypes";
interface CardProps {
  id: string;
  cover: string;
  artistName: string 
  songName: string;
  url: string 
}

const Card = ({ id, cover, artistName, songName, url }: CardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const setActiveSongHandler = () => {
    dispatch(activeSongHandler({ id, cover, url, artistName, songName }));
  };
  return (
    <CardContainer onClick={setActiveSongHandler}>
      <CardThumbnailContainer>
        <Thumbnail src={cover} />
      </CardThumbnailContainer>
      <SongDuration>{songName}</SongDuration>
      <ArtistName>{artistName}</ArtistName>
    </CardContainer>
  );
};

export default Card;
