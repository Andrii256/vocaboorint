import { RootState } from "../..";

export const getUpdatedAnalytics = (
  foreign: string,
  native: string,
  result: "correct" | "wrong" | "skip",
  state: RootState,
) => {
  const analytics = [...state.history.analytics];

  let existingWord = analytics.find(
    (word) => word.f === foreign && word.n === native,
  );

  if (!existingWord) {
    existingWord = {
      f: foreign,
      n: native,
      c: 0,
      w: 0,
    };

    analytics.push(existingWord);
  }

  if (result === "correct") {
    existingWord.c++;
  } else {
    existingWord.w++;
  }

  return analytics;
};
