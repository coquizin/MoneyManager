import { ListUl } from "@styled-icons/bootstrap";
import { MoneyCnyCircle } from "@styled-icons/remix-line";
import MenuItem from "./MenuItem";
import { iStyles } from "./MenuItem/styles";
import { Container, GroupMenuItems } from "./styles";
import useSideMenu from "@/stores/useSideMenu";
import { SideMenuItemType } from "@/stores/useSideMenu/types";
import { SIDE_MENU_WIDTH } from "../constants";

const listIcons = [
  {
    id: 1,
    icon: <ListUl {...iStyles} />,
    value: SideMenuItemType.Menu,
  },
];

const SideMenu = () => {
  const setIsOpen = useSideMenu((state) => state.setIsOpen);
  const isOpen = useSideMenu((state) => state.isOpen);
  const setSideMenuType = useSideMenu((state) => state.setSideMenuType);
  const sideMenuType = useSideMenu((state) => state.sideMenuType);

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
        className={`flex items-center justify-center text-white w-full bg-[#045787] h-[${SIDE_MENU_WIDTH}]`}
      >
        <MoneyCnyCircle size={45} />
      </div>
      <GroupMenuItems>
        {listIcons.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => handleClick(item.value)}
            isActive={item.value === sideMenuType && isOpen}
          >
            {item.icon}
          </MenuItem>
        ))}
      </GroupMenuItems>
    </Container>
  );
};

export default SideMenu;
