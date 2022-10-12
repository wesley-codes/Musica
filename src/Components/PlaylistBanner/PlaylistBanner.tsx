import React from "react";
import {
  Banner,
  BannerInfo,
  ButtonContainer,
  CollectionIcon,
  HeartAvatar,
  HeartIcon,
  Image,
  ImageContainer,
  PlayAllIcon,
  PlayListButton,
} from "./PlaylistBanner.styles";
import lead from "../Assets/Lead.png";
import PlayAllSVG from "../SVG/PlayAllSVG";

export type PlaylistBannerProps = {
  children?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal;
};

const PlaylistBanner = ({ children }: PlaylistBannerProps) => {
  return (
    <Banner>
      <ImageContainer>
        <Image src={lead} />
      </ImageContainer>
      <BannerInfo>
        <h2>Tomorrow’s tunes</h2>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>

          <p> 64 songs ~ 16 hrs+ </p>
        </div>

        <ButtonContainer>
          <PlayListButton>
            <PlayAllIcon />
            <p>Play all </p>
          </PlayListButton>

          <PlayListButton>
            <CollectionIcon />
            <p> Add to collection</p>
          </PlayListButton>

          <PlayListButton like>
            <HeartIcon />
            <p> Like</p>
          </PlayListButton>

          <HeartAvatar>
            <HeartIcon />
          </HeartAvatar>
        </ButtonContainer>
      </BannerInfo>
    </Banner>
  );
};

export default PlaylistBanner;
