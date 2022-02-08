import { KeyboardEventHandler } from "react";
import { top100FilmsType } from "../../data";

export interface ComponentProps {
  data: top100FilmsType[];
  mode: KeyboardEventHandler<HTMLFormElement>;
}
