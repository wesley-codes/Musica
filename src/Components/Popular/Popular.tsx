import React from "react";
import { useFetchPopularByCountryQuery } from "../../Services/songApi";
import Card from "../Card/Card";
import { CardContainer, HeaderContainer } from "../TopChart/TopChart.styles";
import { PopularContainer } from "./Popular.styles";

const Popular = () => {
  const { data } = useFetchPopularByCountryQuery("NG");

  return (
    <PopularContainer>
      <HeaderContainer>
        <h2>Popular in your area</h2>
      </HeaderContainer>
      <CardContainer release>
        {data?.map((item) => (
          <Card
            key={item.key}
            id={item.key}
            cover={item.images!?.coverart}
            songName={item.title}
            artistName={item.artists!?.map((item) => item.alias)}
            url={item.hub.actions!?.map((item) => item.uri!)}
          />
        ))}
      </CardContainer>
    </PopularContainer>
  );
};

export default Popular;
