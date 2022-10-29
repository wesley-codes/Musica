import React from "react";
import styled from "styled-components";
import { Mobile } from "../../../Utility/Responsive/Mobile";
import CardCollection from "../../CardCollection/CardCollection";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../../Features/Store";
import { PlaylistType } from "../../../Types/LocalDataTypes";
import { PlaylistBannerProps } from "../../PlaylistBanner/PlaylistBanner";

const CardRow = styled.div`
  margin-top: 2rem;
  display: flex;

  overflow-x: auto;

  ${Mobile({ marginTop: "1rem", width: "100%", flexDirection: "column" })}
`;

const CollectionAbulm = () => {
  let collection_localStorage = JSON.parse(
    localStorage.getItem("songs") as any
  ) as PlaylistBannerProps[];

  return (
    <React.Fragment>
      <CardRow>
        {collection_localStorage?.map((item) => (
          <CardCollection
            key={item.title}
            cover={item.cover}
            title={item.title}
            id={item.id}
            files={item?.files}
          />
        ))}
      </CardRow>
    </React.Fragment>
  );
};

export default CollectionAbulm;
