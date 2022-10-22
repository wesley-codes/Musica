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
import { TypedUseSelectorHook, useDispatch , useSelector} from "react-redux";
import { AppDispatch, RootState } from "../../Features/Store";
import { playAll } from "../../Features/SongSlice";
import { PauseIcon } from "../Player/Player.styles";

export type PlaylistBannerProps = {
  children?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal;

    cover : string
    title : string
};

const PlaylistBanner = ({ children, cover, title }: PlaylistBannerProps) => {

  const dispatch = useDispatch<AppDispatch>();
//Redux state
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const {playAll:playAllState} = useAppSelector(state => state.song)

const playAllHandler = () => {
  //playall album handler
dispatch(playAll())

}

  return (
    <Banner>
      <ImageContainer>
        <Image src={cover} />
      </ImageContainer>
      <BannerInfo>
        <h2>{title}</h2>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>

          <p> 64 songs ~ 16 hrs+ </p>
        </div>

        <ButtonContainer>
          <PlayListButton onClick={playAllHandler}>
         { playAllState ? <PauseIcon fill="#FACD66"/>  :<PlayAllIcon />}
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
