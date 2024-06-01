import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./features/members/membersSlice";

const store = configureStore({
  reducer: {
    members: membersReducer,
  },
});

export default store;
