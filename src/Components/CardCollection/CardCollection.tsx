import React from "react";
import { ThumbnailContainer } from "../PlaylistCard/PlaylistCard.styles";
import { AlbumCover, CardBox, Container } from "./CardCollection.styles";
import Album4 from "../Assets/Album4.png";
const CardCollection = () => {
  return (
    <CardBox>
      <ThumbnailContainer>
        <AlbumCover src={Album4} />
      </ThumbnailContainer>
      <Container>
        <h3>Limit</h3>
        <p>John watts</p>
      </Container>
    </CardBox>
  );
};

export default CardCollection;
