import React from "react";
import "./App.scss";
import MUIInput from "./components/MUI Input";

import { top100Films } from "./data";

const App = () => {
  return (
    <div className="container">
      <MUIInput data={top100Films} />
    </div>
  );
};

export default App;
