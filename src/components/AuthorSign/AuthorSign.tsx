import clsx from "clsx";
import { FC } from "react";
import { AuthorSignProps } from "./AuthorSign.types";
import "./AuthorSign.css";

export const AuthorSign: FC<AuthorSignProps> = (props) => {
  return (
    <p {...props} className={clsx("AuthorSign", props.className)}>
      Made with 💙💛 by
      &nbsp;
      <a href="https://www.andrii256.info/" target="_blank" className="AuthorSign__link">
        Andrii256
      </a>
    </p>
  );
};
