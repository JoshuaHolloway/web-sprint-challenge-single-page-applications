import styled, { css } from 'styled-components';

const center = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const font = ({ color, size }) => `
  color: ${color || "red"};
  font-size: ${size || "1em"};
`;

export {center, font};