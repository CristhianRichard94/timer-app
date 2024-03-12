import { Time } from "../data/type/date";

export const msToTime = (ms: number): Time => {
  return {
    seconds: Math.floor(ms / 1000),
    minutes: Math.floor((ms / 1000) % 60),
    hours: Math.floor((ms / (1000 * 60)) % 24),
  };
};

export const timeToMs = ({ hours, minutes, seconds }: Time): number => {
  let ms = 0;
  ms += seconds * 1000;
  ms += minutes * 1000 * 60;
  ms += hours * 1000 * 60 * 24;
  return ms;
};

export const formatTime = ({ hours, minutes, seconds }: Time): string => {
  return `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
