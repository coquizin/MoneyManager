export enum SideMenuItemType {
  Menu = `menu`,
}

export enum SideMenuDashboardType {
  Dashboard = `dashboard`,
  Settings = `settings`,
  Friends = `friends`,
  Profile = `profile`,
  Logout = `logout`,
}

export type State = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  sideMenuType: SideMenuItemType;
  setSideMenuType: (type: SideMenuItemType) => void;
  isAnimation: boolean;
};
