import { DictionaryAction } from "./actionCreators";
import { ActionTypes } from "./actionTypes";
import { DictionaryState, initialState } from "./declarations";

export const dictionaryReducer = (
  state: DictionaryState = initialState,
  action: DictionaryAction,
): DictionaryState => {
  switch (action.type) {
    case ActionTypes.SET_DICTIONARY: {
      localStorage.setItem("__vot_dictionary", JSON.stringify(action.payload));
      alert("success");
      return action.payload;
    }
    default:
      return state;
  }
};
