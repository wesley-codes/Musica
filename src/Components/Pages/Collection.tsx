import React from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../Features/Store";
import { Mobile } from "../../Utility/Responsive/Mobile";
import AnimatedRoute from "../AnimatedRoute/AnimatedRoute";
import CollectionButton from "../Button/CollectionButton";
import CardCollection from "../CardCollection/CardCollection";
import { CardBox } from "../CardCollection/CardCollection.styles";

const Container = styled.div`
  margin-top: 5rem;
  padding: 15px;
  ${Mobile({ marginTop: "3rem" })}
`;

const ButtonContainer = styled.div``;

const CardRow = styled.div`
  margin-top: 2rem;
  display: flex;
  overflow-x: auto;

  ${Mobile({ marginTop: "1rem" })}
`;

const Collection = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const { collection } = useAppSelector((state) => state.song);

  return (
    <AnimatedRoute>
      <Container>
        <ButtonContainer>
          <CollectionButton>
            <p> My collection</p>
          </CollectionButton>

          <CollectionButton likes>
            <p> Likes</p>
          </CollectionButton>
        </ButtonContainer>

        <CardRow>{collection.map(item => <CardCollection cover={item.cover} title={item.title} /> )}</CardRow>
      </Container>
    </AnimatedRoute>
  );
};

export default Collection;
