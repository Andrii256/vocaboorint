import clsx from "clsx";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedselector";
import { clearPrevGame } from "../../redux/history/actionCreators";
import { updateComboAction } from "../../redux/playState/actionCreators";
import { GameWordProps } from "./GameWord.types";
import { useVariants } from "./useVariants";
import "./GameWord.css";

export const GameWord: FC<GameWordProps> = ({ className }) => {
  const dispatch = useDispatch();
  const variants = useVariants();
  const { currentWord } = useTypedSelector((state) => state.playState);
  

  useEffect(() => {
    dispatch(updateComboAction());
    dispatch(clearPrevGame());
  }, []);

  return (
    <div className={clsx("GameWord", className)}>
      <div className="GameWord__word">{currentWord}</div>
      <div className="GameWord__variants">{variants}</div>
    </div>
  );
};
