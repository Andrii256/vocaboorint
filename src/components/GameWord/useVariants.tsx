import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useKeyPressEvent } from "react-use";
import { ButtonFilled } from "../../basic-components/ButtonFilled/ButtonFilled";
import { useTypedSelector } from "../../hooks/useTypedselector";
import { RootState } from "../../redux";
import { updateHistory } from "../../redux/history/actionCreators";
import {
  resetIntermediateResult,
  setupIntermediateResult,
  updateComboAction,
} from "../../redux/playState/actionCreators";

export const useVariants = () => {
  const dispatch = useDispatch();
  const state = useTypedSelector((state) => state.playState);
  const { currentWord, correctTranslation, wrongTranslation, intermediateRes } =
    state;

  const handleDecision = (result: "correct" | "wrong") => {
    dispatch(
      updateHistory(result, currentWord, correctTranslation, wrongTranslation),
    );
    dispatch(setupIntermediateResult(result));

    setTimeout(() => {
      dispatch(resetIntermediateResult());
      dispatch(updateComboAction());
    }, 300);
  };

  const getButton = (result: "correct" | "wrong") => (
    <ButtonFilled
      color={
        intermediateRes.result === result
          ? result === "correct"
            ? "green"
            : "red"
          : "violet"
      }
      className="GameWord__variant"
      key={result}
      onClick={() => handleDecision(result)}
    >
      {
        // @ts-ignore ts bug
        state[`${result}Translation`]
      }
    </ButtonFilled>
  );

  const decisionNumber = useMemo(
    () => (Math.random() - Math.random() + Math.random() > 0.55 ? 1 : -1),
    [correctTranslation, wrongTranslation],
  );

  useKeyPressEvent(
    (event) => event.key === "ArrowRight" || event.key === "ArrowLeft",
    (event) => {
      if (
        (decisionNumber === 1 && event.key === "ArrowRight") ||
        (decisionNumber === -1 && event.key === "ArrowLeft")
      ) {
        handleDecision("correct");
      } else {
        handleDecision("wrong");
      }
    },
  );

  const variants = [getButton("wrong"), getButton("correct")].sort(
    () => decisionNumber,
  );

  return variants;
};
