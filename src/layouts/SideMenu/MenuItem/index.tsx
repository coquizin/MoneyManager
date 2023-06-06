import { Container, Icon } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem = ({ onClick, children, isActive }: MenuItemProps) => {
  return (
    <Container onClick={onClick}>
      <Icon type={isActive ? `active` : `default`}>{children}</Icon>
    </Container>
  );
};

export default MenuItem;
