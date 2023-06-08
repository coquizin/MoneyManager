import styled, { keyframes } from "styled-components";
import { SIDE_MENU_WIDTH } from "../constants";

const contentShow = keyframes`
  0% {width: 0px; }
  100% { width: ${SIDE_MENU_WIDTH};}
`;

const contentDisappear = keyframes`
  0% { width: ${SIDE_MENU_WIDTH};}
  100% { width: 0px; }
`;

export const Container = styled.div`
  overflow-y: auto;
  width: ${SIDE_MENU_WIDTH};
  background-color: #0f172a;
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
  padding: 1rem;
`;
