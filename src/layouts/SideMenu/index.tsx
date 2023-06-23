import { MoneyCnyCircle } from "@styled-icons/remix-line";
import MenuItem from "./MenuItem";
import { iStyles } from "./MenuItem/styles";
import { Container, GroupMenuItems } from "./styles";
import useSideMenu from "@/stores/useSideMenu";
import {
  SideMenuDashboardType,
  SideMenuItemType,
} from "@/stores/useSideMenu/types";
import { SIDE_MENU_WIDTH } from "../constants";
import { Dashboard } from "@styled-icons/boxicons-solid";
import { MenuOutline } from "@styled-icons/evaicons-outline";
import { useRouter } from "next/router";
import { Groups } from "@styled-icons/material-rounded";
import { Settings } from "@styled-icons/evaicons-solid";

const listIcons = [
  {
    id: 1,
    icon: <Dashboard {...iStyles} />,
    value: SideMenuDashboardType.Dashboard,
  },
  {
    id: 2,
    icon: <Groups {...iStyles} />,
    value: SideMenuDashboardType.Friends,
  },
  {
    id: 3,
    icon: <Settings {...iStyles} />,
    value: SideMenuDashboardType.Settings,
  },
];

const SideMenu = () => {
  const setIsOpen = useSideMenu((state) => state.setIsOpen);
  const isOpen = useSideMenu((state) => state.isOpen);
  const setSideMenuType = useSideMenu((state) => state.setSideMenuType);
  const sideMenuType = useSideMenu((state) => state.sideMenuType);
  const router = useRouter();

  function handleClick(value: SideMenuItemType) {
    if (!isOpen) {
      setIsOpen(true);
      setSideMenuType(value);
      return;
    }

    if (sideMenuType === value) {
      return setIsOpen(false);
    }

    return setSideMenuType(value);
  }

  return (
    <Container>
      <div
        className={`flex items-center justify-center text-white w-full bg-[#045787] h-[60px]`}
      >
        <MoneyCnyCircle size={45} />
      </div>
      <GroupMenuItems>
        <MenuItem key={1} onClick={() => handleClick(SideMenuItemType.Menu)}>
          {<MenuOutline {...iStyles} />}
        </MenuItem>
        <div className="w-full h-[1px] my-2 px-[2px] rounded-full bg-slate-500" />
        {listIcons.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => router.replace(`/${item.value}`)}
            isActive={router.pathname === `/${item.value}`}
          >
            {item.icon}
          </MenuItem>
        ))}
      </GroupMenuItems>
    </Container>
  );
};

export default SideMenu;
