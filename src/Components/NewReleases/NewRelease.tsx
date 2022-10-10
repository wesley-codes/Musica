import React from "react";
import Card from "../Card/Card";
import { CardContainer, HeaderContainer } from "../TopChart/TopChart.styles";
import { NewReleaseContainer } from "./NewRelease.styles";

const NewRelease = () => {
  return (
    <NewReleaseContainer>
      <HeaderContainer>
        <h2>New Release</h2>
      </HeaderContainer>
      <CardContainer release>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </NewReleaseContainer>
  );
};

export default NewRelease;
