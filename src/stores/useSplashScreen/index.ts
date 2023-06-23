import create, { SetState } from "zustand";

import { State } from "./types";

export const useSplashScreen = create<State>((set: SetState<State>) => {
  const setSplash = (showSplash: boolean) => {
    set(() => ({
      showSplash,
    }));
  };

  return {
    showSplash: false,
    setSplash,
  };
});
