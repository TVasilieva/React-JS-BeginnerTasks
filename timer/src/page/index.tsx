import React, { useEffect, useState } from "react";

import { ComponentProps } from "./types";

import Layout from "../components/layout";
import Timer from "../components/timer";

const date = new Date("2020-01-01 00:00:08");

let tickTimer: any;

const TimerPage: React.FC<ComponentProps> = () => {
  const [timer, setTimer] = useState<Date>(date);
  const [isTicking, setTicking] = useState<boolean>(false);

  useEffect(() => {
    setTimer(date);
  }, []);

  useEffect(() => {
    tickTimer = setTimeout(() => {
      if (
        isTicking &&
        !(!timer.getSeconds() && !timer.getMinutes() && !timer.getHours())
      ) {
        setTimer((timer) => new Date(+timer - 1000));
      }
    }, 1000);
    return () => clearTimeout(tickTimer);
  }, [timer, isTicking]);

  const updateTimer = (): void => {
    setTicking(false);
    setTimer(date);
  };

  const pauseTimer = (): void => {
    clearTimeout(tickTimer);
    setTicking(!isTicking);
  };

  const resetTimer = (): void => {
    setTicking(false);
    setTimer(new Date(new Date().setHours(0, 0, 0, 0)));
  };

  const hours = timer.getHours();
  const minutes = timer.getMinutes();
  const seconds = timer.getSeconds();

  const disabledStart = !hours && !minutes && !seconds;

  return (
    <Layout>
      <Timer data-testid="timer-1" settings={timer} onComplete={resetTimer}>
        {(hours, minutes, seconds) => (
          <>
            <div className="timer">
              <p>{hours > 9 ? hours : "0" + hours}</p>
              <span>:</span>
              <p>{minutes > 9 ? minutes : "0" + minutes}</p>
              <span>:</span>
              <p>{seconds > 9 ? seconds : "0" + seconds}</p>
            </div>
            <div className="button-group">
              <button onClick={updateTimer}>Update</button>
              <button onClick={pauseTimer} disabled={disabledStart}>
                {isTicking ? "Pause" : "Start"}
              </button>
              <button onClick={resetTimer}>Reset</button>
            </div>
          </>
        )}
      </Timer>
    </Layout>
  );
};

export default TimerPage;
