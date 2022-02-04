import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import TimerPage from "../index";

test("should render Timer component", () => {
  render(<TimerPage />);
  const Timer = screen.queryByTestId('timer-1');
  expect(Timer).toBeDefined();
});
