import styled from "styled-components";
import { WrapProps } from "./Props";

export const StyledWrap = styled.div<WrapProps>`
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minWidth }) => minWidth};
`;
