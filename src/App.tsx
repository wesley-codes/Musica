import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Pages/HomePage";
import Playlist from "./Components/Pages/Playlist";
import Player from "./Components/Player/Player";
import MobileSideBar from "./Components/SideBar/MobileSideBar";
import SideBar from "./Components/SideBar/SideBar";
import { Logo, LogoContainer } from "./Components/SideBar/SideBar.styles";
import { Mobile } from "./Utility/Responsive/Mobile";
const Container = styled.div`
  display: none;
  position: relative;
  z-index: 50;
  ${Mobile({ display: "block" })}
`;

function App() {
  const [active, setActive] = useState(false);

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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/playlist" element={<Playlist />} />
          </Routes>
        </div>
        {/* <Player /> */}
      </div>
    </div>
  );
}

export default App;
