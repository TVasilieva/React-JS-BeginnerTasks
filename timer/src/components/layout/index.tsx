import React from "react";
import "./style.scss";
import { ComponentProps } from "./types";

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
