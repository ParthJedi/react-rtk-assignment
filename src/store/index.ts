import { configureStore } from "@reduxjs/toolkit";
import actionReducer from "./slices/actionSlice";

const store = configureStore({
  reducer: {
    actions: actionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ActionDispatch = typeof store.dispatch;

export default store;
