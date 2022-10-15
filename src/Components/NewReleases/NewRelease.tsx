import React from "react";
import { useFetchWorldChartQuery } from "../../Services/songApi";
import Card from "../Card/Card";
import { CardContainer, HeaderContainer } from "../TopChart/TopChart.styles";
import { NewReleaseContainer } from "./NewRelease.styles";

const NewRelease = () => {
  const { data } = useFetchWorldChartQuery();

  return (
    <NewReleaseContainer>
      <HeaderContainer>
        <h2>New Release</h2>
      </HeaderContainer>
      <CardContainer release>
        {data?.map((item) => (
          <Card
          key={item.key}
            cover={item.images.coverart}
            artistName={item.artists[0].alias}
            songName={item.title}
          />
        ))}
      </CardContainer>
    </NewReleaseContainer>
  );
};

export default NewRelease;
