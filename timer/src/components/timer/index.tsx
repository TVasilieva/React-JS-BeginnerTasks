import React from "react";

import "./styles.scss";
import { ComponentProps } from "./types";

const Timer: React.FC<ComponentProps> = ({
  settings,
  onComplete,
  children,
}) => {
  const hours = settings.getHours();
  const minutes = settings.getMinutes();
  const seconds = settings.getSeconds();
  return children(hours, minutes, seconds);
};

export default Timer;
