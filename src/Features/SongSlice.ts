import { WorldChartTypes } from "./../Types/WorldChartTypes";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Action, Hub } from "../Types/PopularTypes";
import {
  AlbumType,
  CollectionType,
  PlaylistType,
  NewSongType,
} from "../Types/LocalDataTypes";

type activeSongTypes = {
  id: string;
  cover: string;
  artistName: string | string[];
  songName: string;
  url: string;
  banner?: string;
  duration?: number;
};

const initialState = {
  currentsong: 0,
  activeSong: {} as unknown as activeSongTypes,
  albumChartList: [] as unknown as PlaylistType[],
  collection: [] as unknown as CollectionType[],
  joinedArray: [] as unknown as PlaylistType[],
  retrivedArray: [] as unknown as PlaylistType[],
  repeat: false,
  shuffle: false,
  playing: false,
  songEnded: false,
  playAlbum: false,
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSongListHandler: (state, { payload }: PayloadAction<NewSongType[]>) => {
      state.joinedArray = [...payload];
      state.retrivedArray = [...payload]; //keeps track of joined array when changed

      state.activeSong.id = state?.joinedArray[0]?.id;
      state.activeSong.artistName = state.joinedArray[0]?.artist;
      state.activeSong.cover = state.joinedArray[0]?.cover!;
      state.activeSong.songName = state.joinedArray[0]?.title!;
      state.activeSong.url = state.joinedArray[0]?.audio!;
    },

    setAlbumHandler: (state, { payload }: PayloadAction<PlaylistType[]>) => {
      state.albumChartList = payload;
    },
    playAll: (state, { payload }: PayloadAction<PlaylistType[]>) => {
      state.playAlbum = true;
      if (state.playAlbum) {
        state.joinedArray = [...payload];
        //playall is true change to album array
        console.log(state.joinedArray);
        state.activeSong = {
          id: state.joinedArray[0].id,
          artistName: state.joinedArray[0].artist,
          cover: state.joinedArray[0].cover,
          songName: state.joinedArray[0].title,
          url: state.joinedArray[0].audio,
        };
        state.playing = true;
      }

      //state.activeSong
    },

    onSongEnded: (state, { payload }: PayloadAction<boolean>) => {
      if (!state.songEnded) {
        state.currentsong++; //increasing current song by

        state.activeSong = {
          id: current(state.joinedArray)[state.currentsong].id,
          cover: current(state.joinedArray)[state.currentsong].cover,
          artistName: current(state.joinedArray)[state.currentsong].artist,
          songName: current(state.joinedArray)[state.currentsong].title,
          url: current(state.joinedArray)[state.currentsong].audio,
        };
      }
    },
    activeSongHandler: (state, { payload }: PayloadAction<activeSongTypes>) => {
      state.playAlbum = false;
      state.joinedArray = state.retrivedArray;
      //console.log()

      state.activeSong = {
        id: payload.id,
        artistName: payload.artistName,
        url: payload.url,
        cover: payload.cover,
        songName: payload.songName,
      };
      state.playing = true;

      //active song id
      let activeSongId = state.activeSong.id as unknown as any;

      console.log(current(state.joinedArray));
      //setting the currentsong index to the index of the activesong
      state.currentsong = current(state.joinedArray)
        .map((item) => item.id)
        .indexOf(activeSongId);
      console.log(state.currentsong);
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
          Math.random() * current(state.joinedArray).length
        );
      }

      state.currentsong++; //increasing current song by

      console.log(current(state.activeSong));
      //if currentsong is less than  current(state.songList).length -1
      if (state.currentsong <= current(state.joinedArray).length - 1) {
        state.activeSong = {
          id: current(state.joinedArray)[state.currentsong].id,
          cover: current(state.joinedArray)[state.currentsong].cover,
          artistName: current(state.joinedArray)[state.currentsong].artist,
          songName: current(state.joinedArray)[state.currentsong].title,
          url: current(state.joinedArray)[state.currentsong].audio,
        };
      } else {
        state.currentsong = 0;
      }
    },

    prevSongHandler: (state) => {
      if (state.shuffle) {
        //if shuffle === true; set currentSong to a random number
        state.currentsong = Math.round(
          Math.random() * current(state.joinedArray).length
        );
        console.log("prev", state.currentsong);
      }
      state.currentsong--;

      if (state.currentsong >= 0) {
        state.activeSong = {
          id: current(state.joinedArray)[state.currentsong].id,
          cover: current(state.joinedArray)[state.currentsong].cover,
          artistName: current(state.joinedArray)[state.currentsong].artist,
          songName: current(state.joinedArray)[state.currentsong].title,
          url: current(state.joinedArray)[state.currentsong].audio,
        };
      } else {
        state.currentsong = 0;
      }
    },

    addToCollection: (state, { payload }) => {
       console.log(payload)

      const filteredCollection = current(state.collection).filter((item) => {
        return item.id === payload.id; //check
      });

      if (filteredCollection.length === 1) {
        return console.log("item exist");
      }

      state.collection.push(payload);

      let imtemInLocaltorage = localStorage.getItem("songs");
      let passedToArray = JSON.parse(imtemInLocaltorage as any);
      //  first append  Code/
      if (imtemInLocaltorage === null || passedToArray.length < 1) {
        let songsArr = [payload];
        localStorage.setItem("songs", JSON.stringify(songsArr));
      } else {
        let storedSongsInLocalStrg = JSON.parse(
          localStorage.getItem("songs") as any
        );
        storedSongsInLocalStrg.push(payload);
        localStorage.setItem("songs", JSON.stringify(storedSongsInLocalStrg));
      }

      //if !item localstorage
      //1. get payload and store to local storage
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
  addToCollection,
} = songSlice.actions;
export default songSlice;

// state.activeSong = {
//     id: ,
//     cover:
//     artistName: ,
//     songName: ,
//     url: ,
//   };
