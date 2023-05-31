class Hoofprint {
  constructor() {}

  info(...args: any[]): void {
    if (!args.length) return;

    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace(/\.(.*)$/, "");

    console.log("[%s] (info)\x1b[32m", date, ...args, "\x1b[0m");
  }

  warn(...args: any[]): void {
    if (!args.length) return;

    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace(/\.(.*)$/, "");

    console.warn("[%s] (warn)\x1b[33m", date, ...args, "\x1b[0m");
  }

  error(...args: any[]): void {
    if (!args.length) return;

    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace(/\.(.*)$/, "");

    console.error("[%s] (error)\x1b[31m", date, ...args, "\x1b[0m");
  }

  debug(...args: any[]): void {
    if (!args.length) return;

    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace(/\.(.*)$/, "");

    console.debug("[%s] (debug)\x1b[36m", date, ...args, "\x1b[0m");
  }
}

export default Hoofprint;
