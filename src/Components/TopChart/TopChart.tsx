import React from "react";
import { Link } from "react-router-dom";
import { useFetchAlbumQuery } from "../../Services/AlbumApi";
import { useFetchWorldChartQuery } from "../../Services/songApi";
import CardPLayer from "../CardPlayer/CardPLayer";
import {
  CardContainer,
  ChartContainer,
  HeaderContainer,
} from "./TopChart.styles";

const TopChart = () => {
  const { data } = useFetchAlbumQuery();

 

  return (
    <ChartContainer>
      <HeaderContainer>
        <h2>Top charts</h2>
      </HeaderContainer>
      <CardContainer>
        {data?.map((item) => (
          <CardPLayer
          key={item.id}
          id={item.id}
            cover={item.cover}
            title={item.title}
            files={item.files}
          />
        ))}
      </CardContainer>
    </ChartContainer>
  );
};

export default TopChart;
