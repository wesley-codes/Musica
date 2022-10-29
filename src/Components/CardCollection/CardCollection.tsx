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
import { Link } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../Features/Store";
import { PlaylistType } from "../../Types/LocalDataTypes";

interface CardCollectionProps {
  title: string;
  cover: string;
  id : number
  files?: PlaylistType[]
}

const CardCollection = ({ title, cover,id, files }: CardCollectionProps) => {

const data ={
 id, title, cover, files
}

  return (

    <Link to={`/playlist/${id}`}  state={data} style={{ textDecoration: "none" }}>

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
    </Link>
  );
};

export default CardCollection;
function useAppSelector(arg0: (state: any) => any): { collection: any; } {
  throw new Error("Function not implemented.");
}

