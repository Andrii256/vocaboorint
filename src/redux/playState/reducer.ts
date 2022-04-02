import { PlayStateAction } from "./actionCreators";
import { ActionTypes } from "./actionTypes";
import { PlayStateState, initialState } from "./declarations";

export const playStateReducer = (
  state: PlayStateState = initialState,
  action: PlayStateAction,
): PlayStateState => {
  switch (action.type) {
    case ActionTypes.TOGGLE_DIRECTION: {
      const newDirection =
        state.direction === "foreign -> native"
          ? "native -> foreign"
          : "foreign -> native";

      localStorage.setItem("___vot_dr_direction", JSON.stringify(newDirection));
      return { ...state, direction: newDirection };
    }

    case ActionTypes.UPDATE_COMBO: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case ActionTypes.RESET_INTERMEDIATE_RESULT: {
      return {
        ...state,
        intermediateRes: action.payload,
      };
    }

    case ActionTypes.SETUP_INTERMEDIATE_RESULT: {
      return {
        ...state,
        intermediateRes: action.payload,
      };
    }

    case ActionTypes.TOGGLE_SOUND: {
      return {
        ...state,
        sound: !state.sound,
      };
    }

    default:
      return state;
  }
};
