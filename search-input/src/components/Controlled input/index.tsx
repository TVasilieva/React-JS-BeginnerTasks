import React, { FC, useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { top100FilmsType } from "../../data";

import "./style.scss";
import { ComponentProps } from "./types";

const ControlledInput: FC<ComponentProps> = ({ data, mode }) => {
  const [filter, setFilter] = useState<string>("");

  const searchItem =
    (filter: string) =>
    (e: any): void => {
      e.preventDefault();
      console.log(
        data.filter((e) => e.title.toLowerCase().includes(filter.toLowerCase()))
      );
      setFilter("");
    };

  const handleChange = (e: any): void => {
    setFilter(e?.target?.value);
  };

  const debouncedOnChange = debounce(handleChange, 500);

  let dataOptions;

  if (filter) {
    dataOptions = data.map((e: top100FilmsType) => {
      return <option value={e.title} key={Math.random() * Math.random()} />;
    });
  }

  return (
    <form
      className="controlled-form"
      onSubmit={searchItem(filter)}
      onKeyPress={mode}
    >
      <input
        list="browsers"
        className="controlled-input"
        onChange={mode ? debouncedOnChange : handleChange}
        value={filter}
      />
      <datalist id="browsers">{dataOptions}</datalist>
      <button className="controlled-button">Search</button>
    </form>
  );
};

export default ControlledInput;
