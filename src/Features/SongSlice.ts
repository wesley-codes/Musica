import { WorldChartTypes } from './../Types/WorldChartTypes';
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Action, Hub } from "../Types/PopularTypes";

type activeSongTypes = {
    id: string
    cover : string
   artistName : string[] 
   songName : string 
   url : string 
}


const initialState = {
    currentsong: 0,
    activeSong:{} as unknown as activeSongTypes,
    songList : JSON.parse(localStorage.getItem("songs")) || [] ,
    repeat : false,
    shuffle : false,
    playing: false
    
    }
    

export const songSlice = createSlice({
    name: "song",
initialState,
reducers:{
setSongListHandler:(state , {payload}:PayloadAction<WorldChartTypes[]>)=>{


},
    activeSongHandler : (state , {payload}) =>{
        state.activeSong = payload
       // console.log(state.activeSong.url)

    },
    playHandler :(state, {payload}:PayloadAction<HTMLAudioElement>)=>{

    }


}

})


export const {activeSongHandler, setSongListHandler} = songSlice.actions
export default songSlice