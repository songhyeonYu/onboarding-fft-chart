import React from "react";

export type TextProps = {
  text: string;
  color?: string;
  size?: string;
  fontWeight?: string;
  cursor?: string;
  hoverColor?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
