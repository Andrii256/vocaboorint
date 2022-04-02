import { Dispatch } from "react";
import { RootState } from "..";
import { ActionTypes } from "./actionTypes";
import { PlayStateState } from "./declarations";
import {} from "redux-thunk";
import { getRandomIntegerFromNexceptX } from "../../utils/getRandomIntegerFromN";
import { getNewCombo } from "./utils/getNewCombo";

interface ToggleDirectionAction {
  type: ActionTypes.TOGGLE_DIRECTION;
}
export const toggleDirection = (): ToggleDirectionAction => ({
  type: ActionTypes.TOGGLE_DIRECTION,
});

export interface UpdateComboAction {
  type: ActionTypes.UPDATE_COMBO;
  payload: Pick<
    PlayStateState,
    "currentWord" | "correctTranslation" | "wrongTranslation"
  >;
}
export const updateComboAction =
  () => (dispatch: Dispatch<UpdateComboAction>, getState: () => RootState) => {
    dispatch({
      type: ActionTypes.UPDATE_COMBO,
      payload: getNewCombo(getState),
    });
  };

interface SetupIntermediateResultAction {
  type: ActionTypes.SETUP_INTERMEDIATE_RESULT;
  payload: PlayStateState["intermediateRes"];
}
export const setupIntermediateResult = (
  result: PlayStateState["intermediateRes"]["result"],
): SetupIntermediateResultAction => ({
  type: ActionTypes.SETUP_INTERMEDIATE_RESULT,
  payload: {
    isShowing: true,
    result,
  },
});

interface ResetIntermediateResultAction {
  type: ActionTypes.RESET_INTERMEDIATE_RESULT;
  payload: PlayStateState["intermediateRes"];
}
export const resetIntermediateResult = (): ResetIntermediateResultAction => ({
  type: ActionTypes.RESET_INTERMEDIATE_RESULT,
  payload: {
    isShowing: false,
    result: null,
  },
});

interface ToggleSoundAction {
  type: ActionTypes.TOGGLE_SOUND;
}
export const toggleSound = (): ToggleSoundAction => ({
  type: ActionTypes.TOGGLE_SOUND,
});

export type PlayStateAction =
  | ToggleDirectionAction
  | UpdateComboAction
  | SetupIntermediateResultAction
  | ResetIntermediateResultAction
  | ToggleSoundAction;
