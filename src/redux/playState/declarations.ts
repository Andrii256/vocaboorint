import { getFromLS } from "../../utils/getFromLS";

export interface PlayStateState {
  direction: "native -> foreign" | "foreign -> native";
  sound: boolean;
  currentWord: string;
  correctTranslation: string;
  wrongTranslation: string;
  intermediateRes: {
    isShowing: boolean;
    result: "wrong" | "correct" | null;
  };
}

const direction: PlayStateState["direction"] =
  getFromLS<PlayStateState["direction"]>("___vot_dr_direction") ??
  "foreign -> native";
const sound: PlayStateState["sound"] =
  getFromLS<PlayStateState["sound"]>("___vot_allow_sound") ?? true;

export const initialState: PlayStateState = {
  direction,
  sound,
  currentWord: "",
  correctTranslation: "",
  wrongTranslation: "",
  intermediateRes: {
    isShowing: false,
    result: null,
  },
};
