import songSlice from "./SongSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { songApi } from "../Services/songApi";

const rootReducer = combineReducers({
  [songApi.reducerPath]: songApi.reducer,
  [songSlice.name]: songSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(songApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
