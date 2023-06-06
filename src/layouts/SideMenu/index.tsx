import { ListUl } from "@styled-icons/bootstrap";
import { ClockAlarm } from "@styled-icons/fluentui-system-regular";
import { Newspaper } from "@styled-icons/ionicons-outline";

import MenuItem from "./MenuItem";
import { iStyles } from "./MenuItem/styles";
import { Container, GroupMenuItems } from "./styles";
import useSideMenu from "@/stores/useSideMenu";
import { SideMenuItemType } from "@/stores/useSideMenu/types";

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
