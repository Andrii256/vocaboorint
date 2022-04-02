import clsx from "clsx";
import React, { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonFilled } from "../../basic-components/ButtonFilled/ButtonFilled";
import { AuthorSign } from "../AuthorSign/AuthorSign";
import { DirectionToggler } from "../DirectionToggler/DirectionToggler";
import { BottomPanelProps } from "./BottomPanel.types";
import "./BottomPanel.css";

export const BottomPanel: FC<BottomPanelProps> = ({ className }) => {
  const navigate = useNavigate();
  const [canStart, setCanStart] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setCanStart(true), 1500);

    return () => clearTimeout(timeout);
  });

  return (
    <section className={clsx("BottomPanel", className)}>
      <ButtonFilled
        color="green"
        className="BottomPanel__start"
        disabled={!canStart}
        onClick={() => {
          if (canStart) {
            navigate("/play");
          }
        }}
      >
        START
      </ButtonFilled>
      <div className="BottomPanel__titers">
        <DirectionToggler className="BottomPanel__direction" />
        <div className="BottomPanel__titer-links">
          <Link to={"/readme"} className="BottomPanel__link">
            Read short guide
          </Link>
          <Link to={"/dictionary"} className="BottomPanel__link">
            Update dictionary
          </Link>
        </div>
        <AuthorSign className="BottomPanel__author" />
      </div>
    </section>
  );
};
