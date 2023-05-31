import { codes } from "./colors";

export const levels = {
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
  DEBUG: "debug",
};

export const colors = {
  [levels.INFO]: codes.GREEN,
  [levels.WARN]: codes.YELLOW,
  [levels.ERROR]: codes.RED,
  [levels.DEBUG]: codes.CYAN,
};

export const getFormattedLevel = ({ level }: { level: string }) => {
  return colors[level] + level + codes.RESET;
};
