import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice";
import feedReducer from "../Utils/feedSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
  },
});

export default store;
