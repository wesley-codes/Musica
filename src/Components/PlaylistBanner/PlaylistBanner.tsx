import React, { useState, useEffect } from "react";
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
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Features/Store";
import { addToCollection, playAll } from "../../Features/SongSlice";
import { PauseIcon } from "../Player/Player.styles";
import { PlaylistType } from "../../Types/LocalDataTypes";

export type PlaylistBannerProps = {
  id: number;

  cover: string;
  title: string;

  files?: PlaylistType[];
};

const PlaylistBanner = ({ id, cover, title, files }: PlaylistBannerProps) => {
  const [play, setPlay] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  //Redux state

  const total_duration = files?.map((item, index) => {
   const parts =  item.duration.toString().split(":");
  return  +parts[0]
  
  }).reduce((a,b)=> a+ b)
  

  useEffect(() => {
    if (play) {
      console.log("play all");
      dispatch(playAll(files!));
    }
  }, [play]);

  const playAllHandler = () => {
    setPlay(!play);

    //playall album handler
  };

  const addToCollectionHandler = () => {
    dispatch(addToCollection({ id, cover, title }));
  };

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

          <p> {files?.length} songs ~ {total_duration} {total_duration! > 59 ? "hrs" : "mins" }+ </p>
        </div>

        <ButtonContainer>
          <PlayListButton onClick={playAllHandler}>
            {play ? <PauseIcon /> : <PlayAllIcon />} <p>Play all </p>
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
