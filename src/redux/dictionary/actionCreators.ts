import { Dispatch } from "react";
import { RootState } from "..";
import { ActionTypes } from "./actionTypes";
import { DictionaryState } from "./declarations";

interface SetDictionaryAction {
  type: ActionTypes.SET_DICTIONARY;
  payload: DictionaryState;
}

export const setDictionary = (inputString: string) => {
  try {
    const parsed = inputString
      .split("\n")
      .map((row) => {
        const splitted = row.split(";");
        return {
          native: String(splitted[1]).trim(),
          foreign: String(splitted[0]).trim(),
        };
      })
      .filter((word) => word.native && word.foreign);

    parsed.sort((a, b) => a.foreign.localeCompare(b.foreign));

    return {
      type: ActionTypes.SET_DICTIONARY,
      payload: parsed,
    };
  } catch {
    alert(
      "Error happend when parsing your new dictionary\nPlease, take a look on text you entered again",
    );
  }
};

export type DictionaryAction = SetDictionaryAction;
