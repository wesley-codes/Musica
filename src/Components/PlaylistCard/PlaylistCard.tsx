import React from "react";
import {
  CardContainer,
  Container,
  DetailIcon,
  HeartIcon,
  IconContainer,
  SecondContainer,
  ThirdContainer,
  Thumbnail,
  ThumbnailContainer,
} from "./PlaylistCard.styles";
import Album8 from "../Assets/Album8.png";
const PlaylistCard = () => {
  return (
    <CardContainer>
      <Container>
        <ThumbnailContainer>
          <Thumbnail src={Album8} />
        </ThumbnailContainer>
        <IconContainer>
          <HeartIcon />
        </IconContainer>
      </Container>

      <SecondContainer>
        <p>Let me love you ~ Krisx</p>

        <p>Single</p>
      </SecondContainer>

      <ThirdContainer>
        <p>4:17</p>

        <DetailIcon />
      </ThirdContainer>
    </CardContainer>
  );
};

export default PlaylistCard;
