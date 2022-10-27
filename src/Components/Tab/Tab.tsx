import React from "react";

type Props = {
  title: string;
  children?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal;
};

const Tab: React.FC<Props> = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Tab;
