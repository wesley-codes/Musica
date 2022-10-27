import React from "react";
import { ThumbnailContainer } from "../PlaylistCard/PlaylistCard.styles";
import {
  AlbumCover,
  CardBox,
  CircleAvatar,
  Container,
  PlayIcon,
} from "./CardCollection.styles";
import Album4 from "../Assets/Album4.png";

interface CardCollectionProps {
  title: string;
  cover: string;
}

const CardCollection = ({ title, cover }: CardCollectionProps) => {
  return (
    <CardBox >
      <ThumbnailContainer>
        <AlbumCover src={cover} whileHover={{ scale: 1.1 }} />
      </ThumbnailContainer>
      <Container
        initial={{ bottom: "20px" }}
        whileHover={{
          top: "10px",
        }}
      >
        <div>
          <h3>{title}</h3>
          <p>John watts</p>
        </div>
        <CircleAvatar>
          <PlayIcon />
        </CircleAvatar>
      </Container>
    </CardBox>
  );
};

export default CardCollection;
