import clsx from "clsx";
import React, { FC } from "react";
import { RecordsPaneProps } from "./RecordsPane.types";
import { Icon } from "./icon";
import { useTypedSelector } from "../../hooks/useTypedselector";
import "./RecordsPane.css";

export const RecordsPane: FC<RecordsPaneProps> = ({ className }) => {
  const { highScore, lastResult } = useTypedSelector((state) => state.history);

  return (
    <section className={clsx("RecordsPane", className)}>
      <div className="RecordsPane__column">
        <div className="RecordsPane__icon-wrapper">
          <Icon fill="#FCFCFF" />
        </div>
        <p className="RecordsPane__content">
          <span className="RecordsPane__title RecordsPane__title--green">
            Last result
          </span>
          <span className="RecordsPane__item">{lastResult.words} words</span>
          <span className="RecordsPane__item">{lastResult.points} points</span>
        </p>
      </div>

      <div className="RecordsPane__column">
        <div
          className="RecordsPane__icon-wrapper"
          onDoubleClick={() => {
            const clearAll = document.querySelector(
              "#clearAll",
            ) as HTMLButtonElement;

            console.log(clearAll);

            clearAll.style.display = "block";
          }}
        >
          <Icon fill="#FFF1DB" />
        </div>

        <p className="RecordsPane__content">
          <span className="RecordsPane__title RecordsPane__title--golden">
            High score
          </span>
          <span className="RecordsPane__item">{highScore.words} words</span>
          <span className="RecordsPane__item">{highScore.points} points</span>
        </p>
      </div>
    </section>
  );
};
