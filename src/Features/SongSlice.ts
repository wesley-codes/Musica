import { WorldChartTypes } from "./../Types/WorldChartTypes";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Action, Hub } from "../Types/PopularTypes";
import { AlbumType, PlaylistType } from "../Types/LocalDataTypes";

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
  worldChartList: [] as unknown as WorldChartTypes[],
  albumChartList: [] as unknown as PlaylistType[],
  repeat: false,
  shuffle: false,
  playing: false,
  playAll: false,
  songEnded: false,
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSongListHandler: (
      state,
      { payload }: PayloadAction<WorldChartTypes[]>
    ) => {
      state.worldChartList = payload;
      //console.log("data from newReleased", state.worldChartList);
      //setting inital active song

      state.activeSong.id = state.worldChartList[0]?.key;
      state.activeSong.artistName =
        state?.worldChartList[0]?.artists![0]?.alias!;
      state.activeSong.cover = state?.worldChartList[0]?.images?.coverart!;
      state.activeSong.songName = state.worldChartList[0]?.title;
      state.activeSong.url = state.worldChartList[0]?.hub?.actions![0]!?.uri!;
    },

    setAlbumHandler: (state, { payload }: PayloadAction<PlaylistType[]>) => {
      state.albumChartList = payload;
    },
    playAll: (state) => {
      state.playAll = !state.playAll;
      if (state.playAll) {
        state.activeSong = {
          id: current(state.albumChartList)[0].id,
          artistName: current(state.albumChartList)[0].artist,
          cover: current(state.albumChartList)[0].cover,
          songName: current(state.albumChartList)[0].title,
          url: current(state.albumChartList)[0].audio,
        };

        // if(state.songEnded){
        //   state.currentsong++; //increasing current song by 1
        //     state.activeSong = {
        //       id: current(state.albumChartList)[state.currentsong].id,
        //       cover: current(state.albumChartList)[state.currentsong]!?.cover,
        //       artistName: current(state.albumChartList)[state.currentsong].artist,

        //       url: current(state.albumChartList)[state.currentsong].audio,

        //       songName: current(state.albumChartList)[state.currentsong]!?.title,
        //     };
         

        // }
      }

      //state.activeSong
    },

    onSongEnded: (state, { payload }: PayloadAction<boolean>) => {
      console.log("....paylood song ended", payload);
    },
    activeSongHandler: (state, { payload }) => {
      state.activeSong = payload;
      state.playing = true;

      //active song id
      let activeSongId = state.activeSong.id as unknown as any;

      //setting the currentsong index to the index of the activesong

      state.currentsong = current(state.worldChartList)
        .map((i) => i.key)
        .indexOf(activeSongId);
    },
    playPauseHandler: (state) => {
      state.playing = !state.playing;
    },
    repeatHandler: (state) => {
      state.repeat = !state.repeat;
    },
    shuffleHandler: (state) => {
      state.shuffle = !state.shuffle; //toggle shuffle
    },
    nextSongHandler: (state) => {
      if (state.shuffle) {
        //if shuffle === true; set currentSong to a random number
        state.currentsong = Math.round(
          Math.random() * current(state.worldChartList).length
        );
      }

      state.currentsong++; //increasing current song by 1

      //if currentsong is less than  current(state.songList).length -1
      if (state.currentsong <= current(state.worldChartList).length - 1) {
        state.activeSong = {
          id: current(state.worldChartList)[state.currentsong].key,
          cover: current(state.worldChartList)[state.currentsong]!?.images
            ?.coverart!,
          artistName: current(state.worldChartList)[state.currentsong]
            ?.artists![0].alias!,

          url: current(state.worldChartList)[state.currentsong].hub!
            .actions![1]!?.uri!,

          songName: current(state.worldChartList)[state.currentsong]!?.title,
        };
      } else {
        state.currentsong = 0;
      }
    },
    prevSongHandler: (state) => {
      if (state.shuffle) {
        //if shuffle === true; set currentSong to a random number
        state.currentsong = Math.round(
          Math.random() * current(state.worldChartList).length
        );
        console.log("prev", state.currentsong);
      }
      state.currentsong--;

      if (state.currentsong >= 0) {
        state.activeSong = {
          id: current(state.worldChartList)[state.currentsong].key,
          cover: current(state.worldChartList)[state.currentsong]?.images
            ?.coverart!,
          artistName: current(state.worldChartList)[state.currentsong]
            ?.artists![0].alias!,

          url: current(state.worldChartList)[state.currentsong].hub!
            ?.actions![1]!.uri!,

          songName: current(state.worldChartList)[state.currentsong]!?.title,
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
  shuffleHandler,
  setAlbumHandler,
  playAll,
  onSongEnded,
} = songSlice.actions;
export default songSlice;

// state.activeSong = {
//     id: ,
//     cover:
//     artistName: ,
//     songName: ,
//     url: ,
//   };
