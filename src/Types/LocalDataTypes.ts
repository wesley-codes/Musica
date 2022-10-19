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
