import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice";
import feedReducer from "../Utils/feedSlice";
import connectionsReducer from "../Utils/connectionsSlice";
import requestsReducer from "../Utils/requestsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionsReducer,
    requests: requestsReducer,
  },
});

export default store;
