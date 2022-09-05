import styled from "styled-components";
import { HoverProps } from "./Props";

export const StyledHover = styled.div<HoverProps>`
  width: 100%;
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
  text-align: ${({ center }) => center};
  &:hover {
    color: ${({ color }) => color};
    background: ${({ background }) => background};
  }
`;
