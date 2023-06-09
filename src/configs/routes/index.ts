import { Route, Routes } from "./types";

const mapParameters = (base: string): Route => {
  return (...args: string[]) => {
    return `/${base}${args.map((parameter) => `/${parameter}`)}`;
  };
};

export const ROUTES: Routes = {
  PUBLIC: {
    SIGNIN: mapParameters(`login`),
  },
  PRIVATE: {
    ROOT: mapParameters(``),
  },
};
