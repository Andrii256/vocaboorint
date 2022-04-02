import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";
import { AuthorSign } from "../../components/AuthorSign/AuthorSign";
import { BackIcon } from "./backIcon";
import { DocumentProps } from "./Document.types";
import "./Document.css";

export const Document: FC<DocumentProps> = ({
  className,
  children,
  goBackPath = "/",
  goBackName,
  title,
}) => {
  return (
    <article className={clsx("Document", className)}>
      <div className="Document__link-wrapper">
        <Link to={goBackPath} className="Document__link">
          <BackIcon className="Document___back-icon" />
          <span>{goBackName}</span>
        </Link>
      </div>

      <div className="Document__bottom">
        {title && <h1 className="Document__title">{title}</h1>}

        <div className="Document__content">{children}</div>

        <AuthorSign className="Document__author" />
      </div>
    </article>
  );
};
