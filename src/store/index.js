import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./candidate";
import skillSetReducer from "./skillSet";
import logger, { createLogger } from "redux-logger";

const store = configureStore({
  reducer: { candidate: candidateReducer, skillSet: skillSetReducer },
  middleware: [createLogger(), logger],
});

export default store;
