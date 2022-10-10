import React from "react";
import Card from "../Card/Card";
import { CardContainer, HeaderContainer } from "../TopChart/TopChart.styles";
import { PopularContainer } from "./Popular.styles";

const Popular = () => {
  return (
    <PopularContainer>
      <HeaderContainer>
        <h2>Popular in your area</h2>
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
      </CardContainer>
    </PopularContainer>
  );
};

export default Popular;
