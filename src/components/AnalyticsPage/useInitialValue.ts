import { useMemo } from "react";
import { useTypedSelector } from "../../hooks/useTypedselector";

const getCustomFlatted = (
  rawAnalytics: {
    f: string;
    n: string;
    c: number;
    w: number;
  }[],
  dictionary: {
    foreign: string;
    native: string;
  }[],
) => {
  dictionary.forEach((d) => {
    if (!rawAnalytics.find((a) => a.f === d.foreign && a.n === d.native)) {
      rawAnalytics.push({
        f: d.foreign,
        n: d.native,
        c: 0,
        w: 0,
      });
    }
  });

  return rawAnalytics;
};

export const useInitialValue = () => {
  const state = useTypedSelector((state) => state);
  const dictionary = [...state.dictionary];

  const analytics = useMemo(
    () =>
      getCustomFlatted([...state.history.analytics], dictionary).sort(
        (a, b) => b.c - a.c,
      ),
    [],
  );

  const initialValue = useMemo(
    () =>
      analytics
        .map(
          (word) =>
            `${word.f}; ${word.n}; c: ${word.c}; w: ${word.w};`,
        )
        .join("\n"),
    [],
  );

  return {
    initialValue,
  };
};
