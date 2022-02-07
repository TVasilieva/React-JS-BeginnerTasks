import React from "react";
import MUIInput from "./components/MUI Input";

import { top100Films } from "./data";

const App = () => {
  return <MUIInput data={top100Films} />;
};

export default App;
