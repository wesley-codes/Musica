import React from "react";
import { PopularSongsType } from "./PopularTypes";
import { WorldChartTypes } from "./WorldChartTypes";

export type SongDataTypes = {
  id: number;
  SongName: string;
  artistName: string;
  duration: string;
  cover: string;
  audio: string;
};

export type CombineType = WorldChartTypes | PopularSongsType;

export type PlaylistType = {
  id: string;
  title: string;
  cover: string;
  artist: string;
  audio: string;
};


export interface CardPlayerProp {
  id: number;
  cover: string;
  title: string;
  files?: PlaylistType[];
}


export type AlbumType = {
  id: number;
  title: string;
  cover: string;
  files : PlaylistType[]
};


export type NewSongType ={
  id: string;
  title: string;
  cover: string;
  duration: string
  audio: string
  artist: string
}


export type CollectionType = {
  id: number
  title: string;
  cover: string;
}