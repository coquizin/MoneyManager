import { SIDE_MENU_WIDTH } from "../constants";
import { Container } from "./styles";
import useSideMenu from "@/stores/useSideMenu";

const SideMenuContent = () => {
  const isAnimation = useSideMenu((state) => state.isAnimation);
  const sideMenuType = useSideMenu((state) => state.sideMenuType);

  /**
   * for now, we only have few side menu items, then ok...
   */

  return (
    <Container disappear={isAnimation}>
      <div
        className={`flex items-center justify-center text-white w-full bg-[#045787] h-[${SIDE_MENU_WIDTH}]`}
      >
        Money Manager
      </div>
      <div>oi</div>
    </Container>
  );
};

export default SideMenuContent;
