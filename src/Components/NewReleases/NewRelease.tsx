import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSongListHandler } from "../../Features/SongSlice";
import { AppDispatch } from "../../Features/Store";
import { useFetchWorldChartQuery, useFetchWorldSongsQuery } from "../../Services/songApi";
import Card from "../Card/Card";
import { CardContainer, HeaderContainer } from "../TopChart/TopChart.styles";
import { NewReleaseContainer } from "./NewRelease.styles";


const NewRelease = () => {
  const  dispatch = useDispatch<AppDispatch>()
  const { data } = useFetchWorldChartQuery();
const {data:fish} = useFetchWorldSongsQuery!()
  //console.log(data)

 useEffect(() => {
  const songs = JSON.stringify(data)
  localStorage.setItem("songs",songs)
 }, [])

  return (
    <NewReleaseContainer>
      <HeaderContainer>
        <h2>New Release</h2>
      </HeaderContainer>
      <CardContainer release>
        {data?.map((item) => (
          <Card
          key={item.key}
          id ={item.key}
            cover={item.images.coverart}
            artistName={item.artists[0].alias}
            songName={item.title}
            url =  {item.hub.actions!?.map((item) => item.uri!)}

          />
        ))}
      </CardContainer>
    </NewReleaseContainer>
  );
};

export default NewRelease;
