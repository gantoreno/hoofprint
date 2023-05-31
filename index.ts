class Hoofprint {
  constructor() {}

  info(...args: any[]): void {
    if (!args.length) return;

    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace(/\.(.*)$/, "");

    console.log("[%s] (info)", date, "\x1b[32m", ...args, "\x1b[0m");
  }

  warn(...args: any[]): void {
    if (!args.length) return;

    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace(/\.(.*)$/, "");

    console.warn("[%s] (warn)", date, "\x1b[33m", ...args, "\x1b[0m");
  }

  error(...args: any[]): void {
    if (!args.length) return;

    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace(/\.(.*)$/, "");

    console.error("[%s] (error)", date, "\x1b[31m", ...args, "\x1b[0m");
  }

  debug(...args: any[]): void {
    if (!args.length) return;

    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace(/\.(.*)$/, "");

    console.debug("[%s] (debug)", date, "\x1b[36m", ...args, "\x1b[0m");
  }
}

export default Hoofprint;
