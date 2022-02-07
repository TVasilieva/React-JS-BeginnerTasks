import React from "react";
import { top100FilmsType } from "../../data";

import "./style.scss";
import { ComponentProps } from "./types";

const ControlledInput: React.FC<ComponentProps> = ({ data, mode }) => {
  const [filter, setFilter] = React.useState("");

  const searchItem =
    (filter: string) =>
    (e: any): void => {
      e.preventDefault();
      console.log(
        data.filter((e) => e.title.toLowerCase().includes(filter.toLowerCase()))
      );
    };

  const handleChange = (e: any): void => {
    setFilter(e.target.value);
  };

  const dataOptions = data.map((e: top100FilmsType) => {
    return <option value={e.title} key={Math.random() * Math.random()} />;
  });

  return (
    <form
      className="controlled-form"
      onSubmit={searchItem(filter)}
      onKeyPress={mode}
    >
      <input
        list="browsers"
        className="controlled-input"
        onChange={handleChange}
      />
      <datalist id="browsers">{dataOptions}</datalist>
      <button className="controlled-button">Search</button>
    </form>
  );
};

export default ControlledInput;
