import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    currentsong: 0,
    songList : "",
    repeat : false,
    shuffle : false,
    playing: false
    
    }
    

export const songSlice = createSlice({
    name: "song",
initialState,
reducers:{}

})



export default songSlice