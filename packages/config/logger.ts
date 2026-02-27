import type { Logger } from "pino";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const pino = require("pino");

export function createLogger(name: string): Logger {
  return pino({
    name,
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    ...(process.env.NODE_ENV !== "production" && {
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
        },
      },
    }),
  });
}
