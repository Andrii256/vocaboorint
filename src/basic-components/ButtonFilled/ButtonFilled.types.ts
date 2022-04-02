import { BaseProps } from "../../utils/BaseProps";

export type ButtonFilledProps = React.HTMLProps<HTMLButtonElement> &
  BaseProps & {
    color: "green" | "violet" | "red";
  };
