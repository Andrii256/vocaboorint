import { RootState } from "../..";
import { AppendLastResultAction } from "../actionCreators";

export const getNewPrevResult = (
  result: "correct" | "wrong" | "skip",
  word: string,
  state: RootState,
): AppendLastResultAction["payload"] => {
  const prevLastResult = state.history.lastResult;

  switch (result) {
    case "correct":
      return {
        moment: Date.now(),
        points: prevLastResult.points + word.length,
        skipped: prevLastResult.skipped,
        words: prevLastResult.words + 1,
      };

    case "skip":
      return {
        ...prevLastResult,
        skipped: prevLastResult.skipped + 1,
        moment: Date.now(),
      };

    case "wrong":
      return {
        ...prevLastResult,
        moment: Date.now(),
      };
  }
};
