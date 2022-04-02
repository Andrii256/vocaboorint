import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/index";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
