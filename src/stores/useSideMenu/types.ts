export enum SideMenuItemType {
  Menu = `menu`,
}

export type State = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  sideMenuType: SideMenuItemType;
  setSideMenuType: (type: SideMenuItemType) => void;
  isAnimation: boolean;
};
