import React, { FC, FormEvent, useRef } from "react";
import { top100FilmsType } from "../../data";

import "./style.scss";
import { ComponentProps } from "./types";

const UncontrolledInput: FC<ComponentProps> = ({ data, mode }) => {
  const input = useRef<any>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(
      data.filter((e: top100FilmsType) =>
        e?.title.toLowerCase().includes(input?.current?.value.toLowerCase())
      )
    );
  };

  const dataOptions = data.map((e: top100FilmsType) => {
    return <option value={e.title} key={Math.random() * Math.random()} />;
  });

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="uncontrolled-form"
        onKeyPress={mode}
      >
        <input
          list="data2"
          className="uncontrolled-input"
          type="text"
          ref={input}
          required
        />
        <datalist id="data2">{dataOptions}</datalist>
        <button className="uncontrolled-button">Search</button>
      </form>
    </>
  );
};

export default UncontrolledInput;
