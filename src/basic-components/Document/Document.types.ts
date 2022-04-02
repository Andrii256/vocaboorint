import { ReactNode } from "react";
import { BaseProps } from "../../utils/BaseProps";

export interface DocumentProps extends BaseProps {
  goBackPath?: string;
  goBackName: ReactNode;
  title?: string;
  children: ReactNode;
}
