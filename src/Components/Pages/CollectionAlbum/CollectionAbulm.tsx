import React from "react";
import styled from "styled-components";
import { Mobile } from "../../../Utility/Responsive/Mobile";
import CardCollection from "../../CardCollection/CardCollection";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../../Features/Store";

const CardRow = styled.div`
  margin-top: 2rem;
  display: flex;
  
  overflow-x: auto;

  ${Mobile({ marginTop: "1rem", width:"100%", flexDirection:"column" })}
`;

const CollectionAbulm = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { collection } = useAppSelector((state) => state.song);

  return (
    <React.Fragment>
      <CardRow>
        {collection.map((item) => (
          <CardCollection cover={item.cover} title={item.title} />
        ))}
      </CardRow>
    </React.Fragment>
  );
};

export default CollectionAbulm;
