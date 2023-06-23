import styled, { keyframes } from "styled-components";

const FADEOUT_DURATION_MS = 400;

const zoomEffect = keyframes`
  0% { transform: scale(1.7); }
  50% { transform: scale(1.85); }
`;

const Overlay = styled.div`
  transition: ease-in-out ${FADEOUT_DURATION_MS}ms background-color,
    ease-in-out ${FADEOUT_DURATION_MS}ms opacity;
`;

const IconContainer = styled.div`
  animation: ${zoomEffect} 1500ms ease-in-out infinite;
  transform: scale(1.7);
`;

export { Overlay, IconContainer };
