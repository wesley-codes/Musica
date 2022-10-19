import React from "react";
import { CollectionBtn } from "./Button.styles";

export type ButtonProps = {
  children?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal;
  likes?: boolean;
};

const CollectionButton = ({ children, likes }: ButtonProps) => {
  return <CollectionBtn likes={+likes!}>{children}</CollectionBtn>;
};

export default CollectionButton;
