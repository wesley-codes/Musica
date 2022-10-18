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
      console.log("data from newReleased", state.songList);
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
      //if currentsong is less than  current(state.songList).length -1
      state.currentsong++;

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
        console.log("next song is true increase", state.currentsong);
      } else {
        //else set the current song index back to 0 so it starts from the begining
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
} = songSlice.actions;
export default songSlice;

// state.activeSong = {
//     id: ,
//     cover:
//     artistName: ,
//     songName: ,
//     url: ,
//   };
