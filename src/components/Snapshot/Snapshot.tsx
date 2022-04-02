import clsx from "clsx";
import React, { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedselector";
import { SnapshotProps } from "./Snapshot.types";
import "./Snapshot.css";

export const Snapshot: FC<SnapshotProps> = ({ className }) => {
  const items = useTypedSelector((state) => state.history.prevSnapshot);

  return (
    <section className={clsx("Snapshot", className)}>
      <ul className="Snapshot__list">
        {items.map((item) => (
          <li
            key={item.correctTranslate + item.wrongTranslate}
            className="Snapshot__item"
          >
            {item.wasCorrect ? "✅" : "❌"}
            &nbsp;&nbsp;
            {item.original}
            {": "}
            <span className="Snapshot__correctTranslation">
              {item.correctTranslate}
            </span>
            {" | "}
            <span className="Snapshot__wrongTranslation">
              {item.wrongTranslate}
            </span>
          </li>
        ))}
        {!items.length && (
          <span>
            No snapshot found
            <br />
            Began play to create new one :)
          </span>
        )}
      </ul>
    </section>
  );
};
