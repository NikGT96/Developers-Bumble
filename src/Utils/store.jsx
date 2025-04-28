import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice";
import feedReducer from "../Utils/feedSlice";
import ConnectionsReducer from "../Utils/connectionsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: ConnectionsReducer,
  },
});

export default store;
