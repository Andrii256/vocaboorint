import { Dispatch } from "react";
import { RootState } from "..";
import { ActionTypes } from "./actionTypes";
import { HistoryState } from "./declarations";
import { getNewPrevResult } from "./utils/getNewPrevResult";
import { getUpdatedAnalytics } from "./utils/getUpdatedAnalytics";

interface ClearSnapshotAction {
  type: ActionTypes.CLEAR_PREV_GAME;
}
export const clearPrevGame = (): ClearSnapshotAction => ({
  type: ActionTypes.CLEAR_PREV_GAME,
});

export interface AppendLastResultAction {
  type: ActionTypes.APPEND_LAST_RESULT;
  payload: HistoryState["lastResult"];
}
export const appendLastResult = (
  result: "correct" | "wrong" | "skip",
  word: string,
  state: RootState,
): AppendLastResultAction => ({
  type: ActionTypes.APPEND_LAST_RESULT,
  payload: getNewPrevResult(result, word, state),
});

interface AppendSnapshotAction {
  type: ActionTypes.APPEND_SNAPSHOT;
  payload: HistoryState["prevSnapshot"][0];
}
export const appendSnapshot = (
  payload: HistoryState["prevSnapshot"][0],
): AppendSnapshotAction => ({
  type: ActionTypes.APPEND_SNAPSHOT,
  payload,
});

interface SetHightScoreActin {
  type: ActionTypes.SET_HIGH_SCORE;
  payload: HistoryState["highScore"];
}
export const setHightScore = (
  payload: SetHightScoreActin["payload"],
): SetHightScoreActin => ({
  type: ActionTypes.SET_HIGH_SCORE,
  payload,
});

interface AppendAnalyticsAction {
  type: ActionTypes.APPEND_ANALYTICS;
  payload: HistoryState["analytics"];
}
export const appendAnalytics = (
  foreign: string,
  native: string,
  result: "correct" | "wrong" | "skip",
  state: RootState,
): AppendAnalyticsAction => ({
  type: ActionTypes.APPEND_ANALYTICS,
  payload: getUpdatedAnalytics(foreign, native, result, state),
});

export const updateHistory =
  (
    result: "correct" | "wrong" | "skip",
    original: string,
    correctTranslate: string,
    wrongTranslate: string,
  ) =>
  (
    dispatch: Dispatch<
      | AppendLastResultAction
      | AppendSnapshotAction
      | SetHightScoreActin
      | AppendAnalyticsAction
    >,
    getState: () => RootState,
  ) => {
    const state = getState();
    const { direction } = state.playState;

    const appendLastResultAction = appendLastResult(result, original, state);
    const appendSpanshotAction = appendSnapshot({
      original,
      wasCorrect: result === "correct",
      correctTranslate,
      wrongTranslate,
    });
    const appendAnalyticsAction = appendAnalytics(
      direction === "foreign -> native" ? original : correctTranslate,
      direction === "foreign -> native" ? correctTranslate : original,
      result,
      state,
    );

    dispatch(appendLastResultAction);
    dispatch(appendSpanshotAction);
    dispatch(appendAnalyticsAction);

    if (
      appendLastResultAction.payload.points +
        appendLastResultAction.payload.words >=
      state.history.highScore.points + state.history.highScore.words
    ) {
      dispatch(
        setHightScore({
          words: appendLastResultAction.payload.words,
          points: appendLastResultAction.payload.points,
          skipped: appendLastResultAction.payload.skipped,
          moment: Date.now(),
        }),
      );
    }
  };

export type HistoryAction =
  | ClearSnapshotAction
  | AppendLastResultAction
  | AppendSnapshotAction
  | SetHightScoreActin
  | AppendAnalyticsAction;
