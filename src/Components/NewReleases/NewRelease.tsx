import React, { useEffect } from "react";

import { useFetchNewSongsQuery } from "../../Services/AlbumApi";

import Card from "../Card/Card";
import { CardContainer, HeaderContainer } from "../TopChart/TopChart.styles";
import { NewReleaseContainer } from "./NewRelease.styles";

const NewRelease = () => {
  const { data = [] } = useFetchNewSongsQuery();

  return (
    <NewReleaseContainer>
      <HeaderContainer>
        <h2>New Release</h2>
      </HeaderContainer>
      <CardContainer release>
        {data?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            cover={item.cover}
            artistName={item.artist}
            songName={item.title}
            url={item.audio}
          />
        ))}
      </CardContainer>
    </NewReleaseContainer>
  );
};

export default NewRelease;
