import React from "react";

import "./style.scss";
import { ComponentProps } from "./types";

const UncontrolledInput: React.FC<ComponentProps> = ({ data, mode }) => {
  const input = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    console.log("Имя: " + input?.current?.value);
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={input} required />
        <label>
          <button>Search</button>
        </label>
      </form>
    </>
  );
};

export default UncontrolledInput;
