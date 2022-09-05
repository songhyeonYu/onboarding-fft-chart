import styled from "styled-components";
import { PaddingProps } from "./Props";

export const StyledPadding = styled.div<PaddingProps>`
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
