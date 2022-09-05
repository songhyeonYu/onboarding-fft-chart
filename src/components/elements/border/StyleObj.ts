import styled from "styled-components";
import { BorderProps } from "./Props";

export const StyledBorder = styled.div<BorderProps>`
  border-width: ${({ borderWidth }) => borderWidth};
  border-style: solid;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
`;
