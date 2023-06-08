import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: 0 0.5rem;
  /* width: 3.125rem; */
  /* height: 2.5rem; */
  cursor: pointer;
  padding: 4px;

  background-color: ${(props) => props.selected && "#045787"};
  transition: all 100ms ease-in-out;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0.25rem;
  width: 30px;
  height: 30px;
  transition: all 100ms ease-in-out;
`;

export const iStyles = {
  width: 26,
  height: 26,
};
