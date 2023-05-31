import Logger from "./lib/logger";

import { levels } from "./utils/levels";

class Hoofprint extends Logger {
  constructor() {
    super();
  }

  info(...args: any[]): void {
    this.log({ level: levels.INFO, args });
  }

  warn(...args: any[]): void {
    this.log({ level: levels.WARN, args });
  }

  error(...args: any[]): void {
    this.log({ level: levels.ERROR, args });
  }

  debug(...args: any[]): void {
    this.log({ level: levels.DEBUG, args });
  }
}

export default Hoofprint;
