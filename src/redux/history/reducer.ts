import { HistoryAction } from "./actionCreators";
import { ActionTypes } from "./actionTypes";
import { HistoryState, initialState } from "./declarations";

export const historyReducer = (
  state: HistoryState = initialState,
  action: HistoryAction,
): HistoryState => {
  switch (action.type) {
    case ActionTypes.CLEAR_PREV_GAME: {
      const clearedState: HistoryState = {
        ...state,
        prevSnapshot: [],
        lastResult: {
          moment: 0,
          points: 0,
          skipped: 0,
          words: 0,
        },
      };

      localStorage.setItem(
        "__vot_prevSnapshot",
        JSON.stringify(clearedState.prevSnapshot),
      );
      localStorage.setItem(
        "__vot_lastResult",
        JSON.stringify(clearedState.lastResult),
      );

      return clearedState;
    }

    case ActionTypes.APPEND_LAST_RESULT: {
      const newState: HistoryState = {
        ...state,
        lastResult: action.payload,
      };

      localStorage.setItem(
        "__vot_lastResult",
        JSON.stringify(newState.lastResult),
      );

      return newState;
    }

    case ActionTypes.APPEND_SNAPSHOT: {
      const newState: HistoryState = {
        ...state,
        prevSnapshot: [...state.prevSnapshot, action.payload],
      };

      localStorage.setItem(
        "__vot_prevSnapshot",
        JSON.stringify(newState.prevSnapshot),
      );

      return newState;
    }

    case ActionTypes.SET_HIGH_SCORE: {
      const newState: HistoryState = {
        ...state,
        highScore: action.payload,
      };

      localStorage.setItem(
        "__vot_highScore",
        JSON.stringify(newState.highScore),
      );

      return newState;
    }

    case ActionTypes.APPEND_ANALYTICS: {
      const newState: HistoryState = {
        ...state,
        analytics: action.payload,
      };

      localStorage.setItem(
        "__vot_analytics",
        JSON.stringify(newState.analytics),
      );

      return newState;
    }

    default:
      return state;
  }
};
