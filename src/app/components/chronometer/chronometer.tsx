"use client";

import { useEffect, useState } from "react";
import TimeInput from "../time-input/time-input";
import { subscribe, unsubscribe } from "@/app/utils/events";
import { formatTime, msToTime, timeToMs } from "@/app/utils/date";
import "./chronometer.css";
function Chronometer() {
  const [remainingTime, setRemainingTime] = useState(0);
  let endTime = 0;

  const tick = () => {
    const remainingTime = Math.max(endTime - Date.now(), 0);
    setRemainingTime(remainingTime);
    if (remainingTime) requestAnimationFrame(tick);
  };
  const handleStart = (event: CustomEvent) => {
    const { hs, mins, secs } = event.detail.time;
    const [hours, minutes, seconds] = [
      parseInt(hs || 0),
      parseInt(mins || 0),
      parseInt(secs || 0),
    ];

    const range = timeToMs({
      hours,
      minutes,
      seconds,
    });
    endTime = Date.now() + range;
    setRemainingTime(range);

    tick();
  };

  useEffect(() => {
    subscribe("startClick", handleStart);

    return () => unsubscribe("startClick", handleStart);
  });

  return (
    <div className="container">
      <TimeInput />
      <h1 className="timer">{formatTime(msToTime(remainingTime))}</h1>
    </div>
  );
}

export default Chronometer;
