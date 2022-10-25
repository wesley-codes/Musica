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
import { addToCollection, playAll } from "../../Features/SongSlice";
import { PauseIcon } from "../Player/Player.styles";
import { PlaylistType } from "../../Types/LocalDataTypes";

export type PlaylistBannerProps = {
id:number

    cover : string
    title : string
    
    files ?: PlaylistType[]
};

const PlaylistBanner = ({id , cover, title , files }: PlaylistBannerProps) => {

  const dispatch = useDispatch<AppDispatch>();
//Redux state

const playAllHandler = () => {
  //playall album handler
dispatch(playAll())
}


const addToCollectionHandler = () =>{
dispatch(addToCollection({id, cover, title}))

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
        <PlayAllIcon />
            <p>Play all </p>
          </PlayListButton>

          <PlayListButton onClick={addToCollectionHandler}>
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
