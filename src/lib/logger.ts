/* eslint-disable @typescript-eslint/no-explicit-any */

import { LogLevel } from "@/@types/logLevel";

class SimpleLogger {
  private logLevel: LogLevel;
  private isDev: boolean;

  constructor() {
    this.logLevel = (process.env.LOG_LEVEL as LogLevel) || "info";
    this.isDev = process.env.NODE_ENV === "development";
  }

  private shouldLog(level: LogLevel): boolean {
    const levels = { debug: 0, info: 1, warn: 2, error: 3 };
    return levels[level] >= levels[this.logLevel];
  }

  private formatMessage(level: LogLevel, message: string, meta?: any): string {
    const timestamp = new Date().toISOString();
    const metaStr = meta ? ` ${JSON.stringify(meta)}` : "";
    return `[${timestamp}] ${level.toUpperCase()}: ${message}${metaStr}`;
  }

  debug(message: string, meta?: any) {
    if (this.shouldLog("debug")) {
      console.log(this.formatMessage("debug", message, meta));
    }
  }

  info(message: string, meta?: any) {
    if (this.shouldLog("info")) {
      console.info(this.formatMessage("info", message, meta));
    }
  }

  warn(message: string, meta?: any) {
    if (this.shouldLog("warn")) {
      console.warn(this.formatMessage("warn", message, meta));
    }
  }

  error(message: string, error?: Error | any) {
    if (this.shouldLog("error")) {
      const errorInfo =
        error instanceof Error
          ? { message: error.message, stack: error.stack }
          : error;
      console.error(this.formatMessage("error", message, errorInfo));
    }
  }
}

const logger = new SimpleLogger();
export default logger;
