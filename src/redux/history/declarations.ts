import { getFromLS } from "../../utils/getFromLS";

export interface HistoryState {
  lastResult: {
    words: number;
    points: number;
    skipped: number;
    moment: number; // timestamp
  };
  prevSnapshot: Array<{
    original: string;
    correctTranslate: string;
    wrongTranslate: string;
    wasCorrect: boolean;
  }>;
  highScore: {
    words: number;
    points: number;
    skipped: number;
    moment: number; // timestamp
  };
  analytics: Array<{
    /** foreign */
    f: string;
    /** native */
    n: string;
    /** correct times */
    c: number;
    /** wrong times */
    w: number;
  }>;
}

const lastResult: HistoryState["lastResult"] = getFromLS<
  HistoryState["lastResult"]
>("__vot_lastResult") ?? {
  words: 0,
  points: 0,
  skipped: 0,
  moment: 0,
};

const prevSnapshot: HistoryState["prevSnapshot"] =
  getFromLS<HistoryState["prevSnapshot"]>("__vot_prevSnapshot") ?? [];

const highScore: HistoryState["highScore"] = getFromLS<
  HistoryState["highScore"]
>("__vot_highScore") ?? {
  words: 0,
  points: 0,
  skipped: 0,
  moment: 0,
};

const analytics: HistoryState["analytics"] =
  getFromLS<HistoryState["analytics"]>("__vot_analytics") ?? [];

export const initialState: HistoryState = {
  lastResult,
  prevSnapshot,
  highScore,
  analytics,
};
