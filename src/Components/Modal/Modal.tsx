import React from "react";
import { BackDrop } from "./Modal.styles";

export type ChildrenProps = {
  children?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal;

  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ children, setSideBar }: ChildrenProps) => {
  return <BackDrop onClick={() => setSideBar(false)}>{children}</BackDrop>;
};

export default Modal;
