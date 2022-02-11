import React, { FC, KeyboardEventHandler } from "react";
import "./App.scss";
import ControlledInput from "./components/Controlled input";
import MUIInput from "./components/MUI Input";
import UncontrolledInput from "./components/Uncontrolled input";

import { top100Films } from "./data";

type SearchInputModes = {
  Immediate: string;
  Enter: KeyboardEventHandler<HTMLFormElement>;
  StopTyping: boolean;
};

const App: FC = () => {
  const SearchInputModes: SearchInputModes = {
    Immediate: "Immediate",
    Enter: (e: any) => {
      e.key === "Enter" && e.preventDefault();
    },
    StopTyping: true,
  };

  return (
    <div className="container">
      {/* Data that changes immediate*/}
      <MUIInput data={top100Films} mode={SearchInputModes.Immediate} />
      {/* Datalist flows with 0.5 sec delay if StopTyping: true*/}
      <ControlledInput data={top100Films} mode={SearchInputModes.StopTyping} />
      {/* Doesn't start searching after pushing "Enter"*/}
      <UncontrolledInput data={top100Films} mode={SearchInputModes.Enter} />
    </div>
  );
};

export default App;
