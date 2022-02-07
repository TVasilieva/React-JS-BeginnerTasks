import React from "react";
import "./App.scss";
import ControlledInput from "./components/Controlled input";
import MUIInput from "./components/MUI Input";

import { top100Films } from "./data";

type SearchInputModes = {
  Immediate: string;
  Enter: (e: any) => void;
  StopTyping: string;
};

const App = () => {
  const SearchInputModes: SearchInputModes = {
    Immediate: "Immediate",
    Enter: (e: any) => {
      e.key === "Enter" && e.preventDefault();
    },
    StopTyping: "StopTyping",
  };

  return (
    <div className="container">
      <MUIInput data={top100Films} />

      <ControlledInput data={top100Films} mode={SearchInputModes.Enter} />
    </div>
  );
};

export default App;
