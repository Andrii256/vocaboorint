import clsx from "clsx";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { ReadmePageProps } from "./ReadmePage.types";
import { Document } from "../../basic-components/Document/Document";
import { md } from "./md";

export const ReadmePage: FC<ReadmePageProps> = ({ className }) => {
  return (
    <Document
      className={clsx("ReadmePage", className)}
      goBackName="Start page"
      goBackPath="/"
      title="Readme"
    >
      <ReactMarkdown children={md} skipHtml />
    </Document>
  );
};
