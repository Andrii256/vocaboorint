import clsx from "clsx";
import React, { FC } from "react";
import { ButtonFilledProps } from "./ButtonFilled.types";
import "./ButtonFilled.css";

export const ButtonFilled: FC<ButtonFilledProps> = (props) => {
  return (
    <button
      {...props}
      type="button"
      className={clsx({
        ButtonFilled: true,
        "ButtonFilled--green": props.color === "green",
        "ButtonFilled--red": props.color === "red",
        "ButtonFilled--violet": props.color === "violet",
        [String(props.className ?? "")]: true,
      })}
    >
      {props.children}
    </button>
  );
};
