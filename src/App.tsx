import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import Collection from "./Components/Pages/Collection";
import HomePage from "./Components/Pages/HomePage";
import Playlist from "./Components/Pages/Playlist";
import Player from "./Components/Player/Player";
import MobileSideBar from "./Components/SideBar/MobileSideBar";
import SideBar from "./Components/SideBar/SideBar";

import { Mobile } from "./Utility/Responsive/Mobile";
import {  useDispatch} from "react-redux";
import { AppDispatch } from "./Features/Store";
import { setSongListHandler } from "./Features/SongSlice";
import LikesCollection from "./Components/Pages/CollectionAlbum/LikesCollection";
import { useFetchNewSongsQuery, useFetchPopularSongsQuery } from "./Services/AlbumApi";

const Container = styled.div`
  display: none;
  position: relative;
  z-index: 50;
  ${Mobile({ display: "block" })}
`;

const RouteContainer = styled.div`
  margin-bottom: 8rem;
  ${Mobile({ marginBottom: "3.5rem" })}
`;


function App() {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const { data:newSongs = [] } = useFetchNewSongsQuery();
  const { data:popularSongs = [] } = useFetchPopularSongsQuery();
const arr3 = newSongs!.concat(popularSongs!)
  useEffect(() => {
    dispatch(setSongListHandler(arr3!));

  }, [arr3!]);

  return (
    <div>
      <div className="App">
        <div className="home__section">
          <SideBar />
          {active && (
            <React.Fragment>
              <Container>
                <MobileSideBar setSideBar={setActive} />
                <Modal setSideBar={setActive} />
              </Container>
            </React.Fragment>
          )}{" "}
          <Navbar setSideBar={setActive} />
          <RouteContainer>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/playlist/:id" element={<Playlist />} />
              <Route path="/collection" element={<Collection />}/>
              <Route path="/collection-likes" element={<LikesCollection/>}/>

            </Routes>
          </RouteContainer>
        </div>
        <Player />
      </div>
    </div>
  );
}

export default App;
