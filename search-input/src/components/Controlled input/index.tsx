import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { top100FilmsType } from "../../data";

import "./style.scss";
import { ComponentProps } from "./types";

const ControlledInput: FC<ComponentProps> = ({ data, mode }) => {
  const [filter, setFilter] = useState<string>("");

  const searchItem =
    (filter: string) =>
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      console.log(
        data.filter((e: top100FilmsType) =>
          e?.title?.toLowerCase().includes(filter.toLowerCase())
        )
      );
      setFilter("");
    };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilter(e?.target?.value);
  };

  let dataOptions;

  if (filter) {
    dataOptions = data.map((e: top100FilmsType) => {
      return <option value={e.title} key={Math.random() * Math.random()} />;
    });
  }

  return (
    <form className="controlled-form" onSubmit={searchItem(filter)}>
      {mode ? (
        <DebounceInput
          list="data"
          className="controlled-input"
          debounceTimeout={500}
          onChange={handleChange}
          value={filter}
        />
      ) : (
        <input
          list="data"
          className="controlled-input"
          onChange={handleChange}
          value={filter}
        />
      )}
      <datalist id="data">{dataOptions}</datalist>
      <button className="controlled-button">Search</button>
    </form>
  );
};

export default ControlledInput;
