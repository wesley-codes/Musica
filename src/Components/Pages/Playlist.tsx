import React, { useEffect } from "react";
import styled from "styled-components";
import { Mobile } from "../../Utility/Responsive/Mobile";
import PlaylistBanner from "../PlaylistBanner/PlaylistBanner";
import lead from "../Assets/Lead.png";
import Navbar from "../Navbar/Navbar";
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import AnimatedRoute from "../AnimatedRoute/AnimatedRoute";
import { useParams, useLocation } from "react-router-dom";
import { CardPlayerProp } from "../../Types/LocalDataTypes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Features/Store";
import {  setAlbumHandler } from "../../Features/SongSlice";

const PlaylistContainer = styled.div<any>`
  padding: 15px;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  min-height: 95vh;
  background: ${({
    cover,
  }) => `linear-gradient(180deg, rgba(29, 33, 35, 0.7) 0%, #1d2123 61.48%),
    url(${cover})`};
  background-size: cover;
  background-position: center;
  object-fit: cover;
  background-repeat: no-repeat;

  ${Mobile({ zIndex: "0" })}
`;

const Container = styled.div`
  margin-top: 5rem;

  ${Mobile({ flexDirection: "column", marginTop: "5rem" })}
`;

const PlayListWrapper = styled.div`
  margin: 3rem 0;
  ${Mobile({ margin: "1rem 0" })}
`;

const Playlist = () => {
  const location = useLocation();
  const { cover, files=[], title, id } = location.state as CardPlayerProp;
  const dispatch = useDispatch<AppDispatch>();

  //console.log(cover, files );

  useEffect(() => {
    dispatch(setAlbumHandler(files!));
  }, [files]);

  return (
    <AnimatedRoute>
      <PlaylistContainer cover={cover}>
        <Navbar sm />
        <Container>
          <PlaylistBanner cover={cover} title={title} files={files} id={id}/>
          <PlayListWrapper>
            {files?.map((item) => (
              <PlaylistCard
                key={item.id}
                id={item.id}
                artistName ={item.artist}
                songName={item.title}
                cover={item.cover}
                url={item.audio}
                banner={cover}
                duration ={item.duration}
              />
            ))}
          </PlayListWrapper>
        </Container>
      </PlaylistContainer>
    </AnimatedRoute>
  );
};

export default Playlist;
