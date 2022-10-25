import React from "react";
import { ThumbnailContainer } from "../PlaylistCard/PlaylistCard.styles";
import { AlbumCover, CardBox, Container } from "./CardCollection.styles";
import Album4 from "../Assets/Album4.png";

interface CardCollectionProps {
  title : string
  cover: string
}



const CardCollection = ({title, cover}: CardCollectionProps) => {
  return (
    <CardBox>
      <ThumbnailContainer>
        <AlbumCover src={cover} />
      </ThumbnailContainer>
      <Container>
        <h3>{title}</h3>
        <p>John watts</p>
      </Container>
    </CardBox>
  );
};

export default CardCollection;
