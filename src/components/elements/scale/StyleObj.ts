import styled from "styled-components";
import { ScaleProps } from "./Props";

export const StyledScale = styled.div<ScaleProps>`
  cursor: pointer;
  &:hover {
    transform: ${({ scale }) => `scale(${scale})`};
    transition: ${({ transition }) => `${transition}s`};
  }
`;
