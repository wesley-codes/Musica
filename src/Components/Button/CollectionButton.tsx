import React from "react";
import { CollectionBtn } from "./Button.styles";

export type ButtonProps = {
  children?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal;
  likes?: boolean;
  onClick :() => void
  selectedTab : number
  isActive : boolean
};

const CollectionButton = ({ children, likes, onClick , selectedTab, isActive}: ButtonProps) => {
  return <CollectionBtn onClick={onClick} likes={+likes!} active={isActive} >{children}</CollectionBtn>;
};

export default CollectionButton;


