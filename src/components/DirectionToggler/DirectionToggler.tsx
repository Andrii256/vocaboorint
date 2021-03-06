import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedselector";
import { toggleDirection } from "../../redux/playState/actionCreators";
import { DirectionTogglerProps } from "./DirectionToggler.types";
import "./DirectionToggler.css";
import clsx from "clsx";

export const DirectionToggler: FC<DirectionTogglerProps> = ({ className }) => {
  const { direction } = useTypedSelector((state) => state.playState);
  const dispatch = useDispatch();

  return (
    <button
      className={clsx("DirectionToggler", className)}
      onClick={() => dispatch(toggleDirection())}
    >
      {direction === "native -> foreign" && "πΊπ¦ β πΊπΈ"}
      {direction === "foreign -> native" && "πΊπΈ β πΊπ¦"}
    </button>
  );
};
