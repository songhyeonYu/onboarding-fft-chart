import styled from "styled-components";
import { TextProps } from "./Props";

export const StyledText = styled.span<TextProps>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-weight: ${({ fontWeight }) => fontWeight};
  cursor: ${({ cursor }) => cursor};
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;
