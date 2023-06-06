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
      <div className="bg-red-500">oi</div>
    </Container>
  );
};

export default SideMenuContent;
