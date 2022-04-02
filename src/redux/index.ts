import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { historyReducer } from "./history/reducer";
import { dictionaryReducer } from "./dictionary/reducer";
import { playStateReducer } from "./playState/reducer";

const rootReducer = combineReducers({
  history: historyReducer,
  dictionary: dictionaryReducer,
  playState: playStateReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof rootReducer>;
