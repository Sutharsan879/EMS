import { configureStore } from "@reduxjs/toolkit";
import agreementsReducer from "./agreementsSlice";

const store = configureStore({
  reducer: {
    agreements: agreementsReducer,
  },
});

export default store;
