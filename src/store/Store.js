import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./inputSlice";

export const store = configureStore({
  reducer,
});
