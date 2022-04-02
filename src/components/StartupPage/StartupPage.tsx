import React, { FC } from "react";
import { BottomPanel } from "../BottomPanel/BottomPanel";
import { RecordsPane } from "../RecordsPane/RecordsPane";
import { Snapshot } from "../Snapshot/Snapshot";
import { StartupPageProps } from "./StartupPage.types";
import "./StartupPage.css";

export const StartupPage: FC<StartupPageProps> = ({}) => {
  return (
    <div className="StartupPage">
      <RecordsPane className="StartupPage__RecordsPane" />
      <Snapshot className="StartupPage__Snapshot" />
      <BottomPanel className="StartupPage__BottomPanel" />
    </div>
  );
};
