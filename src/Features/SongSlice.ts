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
};

const initialState = {
  currentsong: 0,
  activeSong: {} as unknown as activeSongTypes,
  worldChartList: [] as unknown as WorldChartTypes[],
  albumChartList: [] as unknown as PlaylistType[],
  collection: [] as unknown as CollectionType[],
  joinedArray: [] as unknown as PlaylistType[],
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
      { payload }: PayloadAction<NewSongType[]>
    ) => {
        state.joinedArray =[... payload]
       



state.activeSong.id = state?.joinedArray[0]?.id;
state.activeSong.artistName = state.joinedArray[0]?.artist;
state.activeSong.cover = state.joinedArray[0]?.cover!;
state.activeSong.songName = state.joinedArray[0]?.title!;
state.activeSong.url =  state.joinedArray[0]?.audio!;


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
      }

      //state.activeSong
    },

    onSongEnded: (state, { payload }: PayloadAction<boolean>) => {

console.log(!state.songEnded)

if(!state.songEnded){
  state.currentsong++; //increasing current song by


  state.activeSong ={
    id : current(state.joinedArray)[state.currentsong].id,
    cover: current(state.joinedArray)[state.currentsong].cover,
    artistName:current(state.joinedArray)[state.currentsong].artist,
    songName: current(state.joinedArray)[state.currentsong].title,
    url: current(state.joinedArray)[state.currentsong].audio
  }
}

      //plays immediately active song ends

      // state.currentsong++; //increasing current song by 1
      // state.activeSong = {
      //   id: current(state.worldChartList)[state.currentsong].key,
      //   cover: current(state.worldChartList)[state.currentsong]!?.images
      //     ?.coverart!,
      //   artistName: current(state.worldChartList)[state.currentsong]
      //     ?.artists![0].alias!,

      //   url: current(state.worldChartList)[state.currentsong].hub!.actions![1]!
      //     ?.uri!,

      //   songName: current(state.worldChartList)[state.currentsong]!?.title,
      // };
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

      console.log(current(state.activeSong))
      //if currentsong is less than  current(state.songList).length -1
      if (state.currentsong <= current(state.joinedArray).length - 1) {

        state.activeSong ={
          id : current(state.joinedArray)[state.currentsong].id,
          cover: current(state.joinedArray)[state.currentsong].cover,
          artistName:current(state.joinedArray)[state.currentsong].artist,
          songName: current(state.joinedArray)[state.currentsong].title,
          url: current(state.joinedArray)[state.currentsong].audio
        }


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
        state.activeSong ={
          id : current(state.joinedArray)[state.currentsong].id,
          cover: current(state.joinedArray)[state.currentsong].cover,
          artistName:current(state.joinedArray)[state.currentsong].artist,
          songName: current(state.joinedArray)[state.currentsong].title,
          url: current(state.joinedArray)[state.currentsong].audio
        }

      } else {
        state.currentsong = 0;
      }
    },

    addToCollection: (state, { payload }) => {
      // console.log(payload.id)

      const filteredCollection = current(state.collection).filter((item) => {
        return item.id === payload.id;
      });

      console.log(filteredCollection);

      if (filteredCollection.length === 1) {
        return console.log("item exist");
      }
      state.collection.push(payload);

      //console.log(current(state.collection))
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
