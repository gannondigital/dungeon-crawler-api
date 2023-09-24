import { ENV_NAMES } from "./constants.mjs";

// abstraction to support later 3rd party integration, e.g. with winston
export const logger = {
  log: (msg) => {
    if (process.env.NODE_ENV === ENV_NAMES.DEV) {
      console.log(msg);
    }
  },
  error: (msg) => {
    if (process.env.NODE_ENV === ENV_NAMES.DEV) {
      console.error(msg);
    }
  },
};
export default logger;
