import { getFormattedDate } from "../utils/date";
import { getFormattedLevel } from "../utils/levels";

class Logger {
  constructor() {}

  protected log({ level, args }: { level: string; args: any[] }) {
    const formattedDate = getFormattedDate();
    const formattedLevel = getFormattedLevel({ level });

    console.log(`[${formattedDate}] (${formattedLevel})`, ...args);
  }
}

export default Logger;
