import { WorldChartTypes } from "./../Types/WorldChartTypes";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Action, Hub } from "../Types/PopularTypes";

type activeSongTypes = {
  id: string;
  cover: string;
  artistName: string | string[];
  songName: string;
  url: string;
};

const initialState = {
  currentsong: 0,
  activeSong: {} as unknown as activeSongTypes,
  songList: [] as unknown as WorldChartTypes[],
  repeat: false,
  shuffle: false,
  playing: false,
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSongListHandler: (
      state,
      { payload }: PayloadAction<WorldChartTypes[]>
    ) => {
      state.songList = payload;
      //console.log("data from newReleased", state.songList);
      //setting inital active song

      state.activeSong.id = state.songList[0]?.key;
      state.activeSong.artistName = state.songList[0]?.artists[0]?.alias;
      state.activeSong.cover = state.songList[0]?.images.coverart;
      state.activeSong.songName = state.songList[0]?.title;
      state.activeSong.url = state.songList[0]!?.hub!?.actions[1]!?.uri!;
    },
    activeSongHandler: (state, { payload }) => {
      state.activeSong = payload;
      state.playing = true;

      //active song id
      let activeSongId = state.activeSong.id as unknown as any;

      //setting the currentsong index to the index of the activesong

      state.currentsong = current(state.songList)
        .map((i) => i.key)
        .indexOf(activeSongId);

      // console.log("active song playing ", state.playing);
    },
    playPauseHandler: (state) => {
      state.playing = !state.playing;
    },
    repeatHandler: (state) => {
      state.repeat = !state.repeat;
    },
    shuffleHandler: (state) => {
      state.shuffle = true;
    },
    nextSongHandler: (state) => {
      state.currentsong++; //increasing current song by 1

      //if currentsong is less than  current(state.songList).length -1
      if (state.currentsong <= current(state.songList).length - 1) {
        state.activeSong = {
          id: current(state.songList)[state.currentsong].key,
          cover: current(state.songList)[state.currentsong]!?.images.coverart,
          artistName: current(state.songList)[state.currentsong]!?.artists[0]
            .alias,

          url: current(state.songList)[state.currentsong].hub!?.actions[1]!
            ?.uri!,

          songName: current(state.songList)[state.currentsong]!?.title,
        };
      } else {
        state.currentsong = 0;
      }
    },
    prevSongHandler: (state) => {
      state.currentsong--;

      if (state.currentsong >= 0) {
        state.activeSong = {
          id: current(state.songList)[state.currentsong].key,
          cover: current(state.songList)[state.currentsong]!?.images.coverart,
          artistName: current(state.songList)[state.currentsong]!?.artists[0]
            .alias,

          url: current(state.songList)[state.currentsong].hub!?.actions[1]!
            ?.uri!,

          songName: current(state.songList)[state.currentsong]!?.title,
        };
      } else {
        state.currentsong = 0;
      }
    },
  },
});

export const {
  activeSongHandler,
  setSongListHandler,
  playPauseHandler,
  repeatHandler,
  nextSongHandler,
  prevSongHandler,
} = songSlice.actions;
export default songSlice;

// state.activeSong = {
//     id: ,
//     cover:
//     artistName: ,
//     songName: ,
//     url: ,
//   };
