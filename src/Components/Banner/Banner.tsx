import React from "react";
import {
  ArtContainer,
  BannerContainer,
  BottomContainer,
  CenterContainer,
  GuyMan,
  ImageContainer,
  InfoContainer,
  TopContainer,
  VectorContainer,
  VectorImage,
} from "./Banner.styles";
import Vector from "../Assets/Vector.png"
import Guyman from "../Assets/Guyman.png"
const Banner = () => {
  return (
    <BannerContainer>
      <InfoContainer>
        <TopContainer><p>Currated playlist</p></TopContainer>

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

        <BottomContainer></BottomContainer>
      </InfoContainer>

      <ArtContainer>

      <VectorContainer>

<VectorImage src={Vector}/>
</VectorContainer>



<ImageContainer >
    <GuyMan src={Guyman} animate={{ x: 0, opacity: 20 }} initial={{x :"-100vw"}} />
</ImageContainer>



      </ArtContainer>
    </BannerContainer>
  );
};

export default Banner;
