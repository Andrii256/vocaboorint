import clsx from "clsx";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedselector";
import { ExitIcon } from "./exitIcon";
import { GameTopPanelProps } from "./GameTopPanel.types";
import { SoundOnIcon } from "./soundOnIcon";
import { SoundOffIcon } from "./soundOffIcon";
import { useCountdown } from "./useCountdown";
import { paddZeros } from "../../utils/paddZeros";
import "./GameTopPanel.css";
import { useDispatch } from "react-redux";
import { toggleSound } from "../../redux/playState/actionCreators";

export const GameTopPanel: FC<GameTopPanelProps> = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { sound } = useTypedSelector((state) => state.playState);
  const secondsLeft = useCountdown(59);

  return (
    <div className={clsx("GameTopPanel", className)}>
      <button className="GameTopPanel__exit" onClick={() => navigate("/")}>
        <ExitIcon className="GameTopPanel__exitIcon" /> Exit
      </button>

      <span className="GameTopPanel__timer">00:{paddZeros(secondsLeft)}</span>

      <button
        className="GameTopPanel__sound"
        onClick={() => dispatch(toggleSound())}
      >
        {sound ? <SoundOnIcon /> : <SoundOffIcon />}
      </button>
    </div>
  );
};
