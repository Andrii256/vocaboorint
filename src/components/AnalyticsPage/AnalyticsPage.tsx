import { FC } from "react";
import { Document } from "../../basic-components/Document/Document";
import { AnalyticsPageProps } from "./AnalyticsPage.types";
import { useTextaria } from "../../hooks/useTextaria";
import "./AnalyticsPage.css";
import { useInitialValue } from "./useInitialValue";

export const AnalyticsPage: FC<AnalyticsPageProps> = () => {
  const { initialValue } = useInitialValue();
  const { textaria } = useTextaria("AnalyticsPage__textaria", initialValue);

  return (
    <Document
      goBackName="Back to Setup Dictionary"
      goBackPath="/dictionary"
      title="analytics"
    >
      <p>
        Here you have list with analytics appeared as
        <br />
        foreign;
        <br />
        native;
        <br />
        how much times you chosed correct (for all the time): N;
        <br />
        how much times you chosed incorrect (for all the time): N;
        <br />
        <br />
        You can feel free to edit this textarea, remove surplus words. Then copy
        content of textaria and paste in Dictionary.
      </p>

      <br />

      {textaria}
    </Document>
  );
};
