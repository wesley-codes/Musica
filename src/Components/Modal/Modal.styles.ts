import { Mobile } from "./../../Utility/Responsive/Mobile";
import styled from "styled-components";

export const BackDrop = styled.div`
  display: none;
  ${Mobile({
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    zIndex: "-3",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    display: "block",
  })}
`;
