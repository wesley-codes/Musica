import React, { useState } from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../Features/Store";
import { Mobile } from "../../Utility/Responsive/Mobile";
import AnimatedRoute from "../AnimatedRoute/AnimatedRoute";
import CollectionButton from "../Button/CollectionButton";
import CardCollection from "../CardCollection/CardCollection";
import { CardBox } from "../CardCollection/CardCollection.styles";
import Tab from "../Tab/Tab";
import Tabs from "../Tab/Tabs";
import CollectionAbulm from "./CollectionAlbum/CollectionAbulm";
import LikesCollection from "./CollectionAlbum/LikesCollection";

const Container = styled.div`
  margin-top: 5rem;
  padding: 15px;
  ${Mobile({ marginTop: "3rem" })}
`;

const ButtonContainer = styled.div``;

const Collection = () => {
  

  return (
    <AnimatedRoute>
      <Container>
        <Tabs>
          <Tab title="My Collection">
            <CollectionAbulm />
          </Tab>
          <Tab title="Likes" >
            <LikesCollection />
          </Tab>
        </Tabs>
      </Container>
    </AnimatedRoute>
  );
};

export default Collection;
