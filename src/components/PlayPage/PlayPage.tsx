import clsx from "clsx";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedselector";
import { updateHistory } from "../../redux/history/actionCreators";
import { updateComboAction } from "../../redux/playState/actionCreators";
import { GameTopPanel } from "../GameTopPanel/GameTopPanel";
import { GameWord } from "../GameWord/GameWord";
import { PlayPageProps } from "./PlayPage.types";
import "./PlayPage.css";
import { usePronounsiation } from "./usePronounsiation";

export const PlayPage: FC<PlayPageProps> = () => {
  const dispatch = useDispatch();
  const {
    correctTranslation,
    wrongTranslation,
    currentWord,
    direction,
    sound,
    intermediateRes: { isShowing: isResultShowing, result },
  } = useTypedSelector((state) => state.playState);

  const [audio] = usePronounsiation(
    direction === "foreign -> native" ? currentWord : correctTranslation,
    sound,
  );

  return (
    <article className="PlayPage">
      <div
        className={clsx({
          PlayPage__content: true,
          "PlayPage__content--wrong": isResultShowing && result === "wrong",
          "PlayPage__content--correct": isResultShowing && result === "correct",
        })}
      >
        <GameTopPanel className="PlayPage__topPanel" />

        <div className="PlayPage__status">
          &nbsp;
          {isResultShowing &&
            ((result === "correct" && "✅ 😊 ✅") ||
              (result === "wrong" && "❌ 😔 ❌"))}
          &nbsp;
        </div>

        {audio}

        <GameWord className="PlayPage__word" />

        <button
          className="PlayPage__skip"
          onClick={() => {
            dispatch(
              updateHistory(
                "skip",
                currentWord,
                correctTranslation,
                wrongTranslation,
              ),
            );
            dispatch(updateComboAction());
          }}
        >
          Skip word
        </button>
      </div>
    </article>
  );
};
