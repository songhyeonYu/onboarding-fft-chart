import styled from "styled-components";
import { RefProps } from "./Props";

export const StyledRef = styled.div<RefProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  flex-shrink: ${({ shrink }) => shrink};
  flex-wrap: ${({ wrap }) => wrap}; ;
\`;
`;
