import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import MobileSideBar from "./Components/SideBar/MobileSideBar";
import SideBar from "./Components/SideBar/SideBar";
import { Logo, LogoContainer } from "./Components/SideBar/SideBar.styles";
function App() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="App">
        <div className="home__section">
          <SideBar />
          {active && (
            <Modal setSideBar={setActive}>
              <MobileSideBar />
            </Modal>
          )}{" "}
          <Navbar setSideBar={setActive} />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sunt
            ipsum molestias esse quam quia repellat quas! Sequi, id eum amet
            repellat omnis tempora debitis velit nostrum? Explicabo, beatae hic!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
