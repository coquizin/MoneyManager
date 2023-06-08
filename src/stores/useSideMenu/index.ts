import create, { SetState } from "zustand";
import { SideMenuItemType, State } from "./types";

const useSideMenu = create<State>((set: SetState<State>) => {
  function setIsOpen(isOpen: State["isOpen"]): void {
    if (!isOpen) {
      set(() => ({
        isAnimation: true,
      }));

      setTimeout(() => {
        set(() => ({
          isOpen,
        }));
      }, 300);

      return;
    }

    set(() => ({
      isOpen,
      isAnimation: false,
    }));
  }

  function setSideMenuType(sideMenuType: SideMenuItemType): void {
    set(() => ({
      sideMenuType,
    }));
  }

  return {
    isAnimation: false,
    isOpen: false,
    setIsOpen,
    sideMenuType: SideMenuItemType.Menu,
    setSideMenuType,
  };
});

export default useSideMenu;
