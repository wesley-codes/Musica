import React from "react";
import { useFetchPopularSongsQuery } from "../../Services/AlbumApi";
import { useFetchPopularByCountryQuery } from "../../Services/songApi";
import Card from "../Card/Card";
import { CardContainer, HeaderContainer } from "../TopChart/TopChart.styles";
import { PopularContainer } from "./Popular.styles";

const Popular = () => {
  const { data } = useFetchPopularSongsQuery();

  return (
    <PopularContainer>
      <HeaderContainer>
        <h2>Popular in your area</h2>
      </HeaderContainer>
      <CardContainer release>
        {data?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            cover={item.cover}
            songName={item.title}
            artistName={item.artist}
            url={item.audio}
          />
        ))}
      </CardContainer>
    </PopularContainer>
  );
};

export default Popular;
