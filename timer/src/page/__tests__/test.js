import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TimerPage from "../index";

//test("properly renders timer", () => {});

describe("TimerPage", () => {
  //doesn't work
  test("should render Timer component", () => {
    render(<TimerPage />);
    const Timer = screen.queryByRole("timer-1");
    expect(Timer).toBeDefined();
  });
  test("there are 1 Timer Component", () => {
    render(<TimerPage />);
    const Timer = screen.getAllByRole("Timer");
    expect(Timer).toHaveLength(1);
  });
});

describe("Check buttons", () => {
  test("button isn't disabled from the start", () => {
    render(<TimerPage />);
    const button = screen.getByRole("button", { name: /Start/i });
    expect(button).not.toBeDisabled();
  });
  test("there are 3 buttons", () => {
    render(<TimerPage />);
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });
  test("should contain Update-button", () => {
    render(<TimerPage />);
    const updateButton = screen.getByRole("button", { name: /Update/i });
    expect(updateButton).toBeDefined();
  });
  test("should contain Reset-button", () => {
    render(<TimerPage />);
    const resetButton = screen.getByRole("button", { name: /Reset/i });
    expect(resetButton).toBeDefined();
  });
});

//Buttons

//check disabled when 00:00:00
//check if timer stops after clicking
//check if data updates after clicking
//check if data resets afer clicking reset-btn
//button turns blue after clicking

//Timer

//check timer going to zero
//timer stops after 00:00
//hours, minutes and seconds are numbers
