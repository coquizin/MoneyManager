import styled from "styled-components";
import { SIDE_MENU_WIDTH } from "../constants";

export const Container = styled.div`
  overflow-y: auto;
  width: ${SIDE_MENU_WIDTH};
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GroupMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;
