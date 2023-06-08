import styled, { keyframes } from "styled-components";
import { SIDE_MENU_CONTENT_WIDTH } from "../constants";

const contentShow = keyframes`
  0% {width: 0px; }
  100% { width: ${SIDE_MENU_CONTENT_WIDTH};}
`;

const contentDisappear = keyframes`
  0% { width: ${SIDE_MENU_CONTENT_WIDTH};}
  100% { width: 0px; }
`;

export const Container = styled.div`
  width: ${SIDE_MENU_CONTENT_WIDTH};
  overflow: auto;
  background-color: #0f172a;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    width: 6px;
    background: #555;
  }

  &::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 24px;
  }

  &:focus {
    outline: none;
  }

  /* @media (prefers-reduced-motion: no-preference) {
  } */
  animation-name: ${(props) =>
    props.disappear ? contentDisappear : contentShow};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;
