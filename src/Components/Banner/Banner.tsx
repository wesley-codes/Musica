import React from "react";
import {
  ArtContainer,
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  AvatarContainer,
  BannerContainer,
  BottomContainer,
  CenterContainer,
  GuyMan,
  HeartIcon,
  ImageContainer,
  InfoContainer,
  MobileVector,
  MobileVectorcontainer,
  TopContainer,
  VectorContainer,
  VectorImage,
  Wrapper,
} from "./Banner.styles";
import Mobilevector from "../Assets/Mobilevector.png";
import Vector from "../Assets/Vector.png";
import Guyman from "../Assets/Guyman.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import A from "../Assets/Avatar1.png";
import B from "../Assets/Avatar2.png";
import C from "../Assets/Avatar3.png";
import D from "../Assets/Avatar4.png";
import E from "../Assets/Avatar5.png";

const Banner = () => {
  return (
    <BannerContainer>
      <MobileVector src={Mobilevector} />

      <InfoContainer>
        <TopContainer>
          <p>Currated playlist</p>
        </TopContainer>

        <CenterContainer>
          <div>
            <h2>R & B Hits</h2>

            <div>
              <p>
                All mine, Lie again, Petty call me everyday, Out of time, No
                love, Bad habit, and so much more
              </p>
            </div>
          </div>
        </CenterContainer>

        <BottomContainer>
          <AvatarContainer>
            <Avatar1 src={A} />
            <Avatar2 src={B} />
            <Avatar3 src={C} />
            <Avatar4 src={D} />
            <Avatar5 src={E} />
          </AvatarContainer>

          <Wrapper>
            <HeartIcon />

            <p>33k Likes</p>
          </Wrapper>
        </BottomContainer>
      </InfoContainer>

      <ArtContainer>
        <VectorContainer>
          <VectorImage src={Vector} />
        </VectorContainer>

        <ImageContainer>
          <GuyMan
            src={Guyman}
            animate={{ x: 0, opacity: 20 }}
            initial={{ x: "-100vw" }}
          />
        </ImageContainer>
      </ArtContainer>
    </BannerContainer>
  );
};

export default Banner;
