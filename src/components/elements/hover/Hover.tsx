import React, { PropsWithChildren } from "react";
import { StyledHover } from "./StyleObj";
import { HoverProps } from "./Props";

const Hover = (props: PropsWithChildren<HoverProps>) => {
  return <StyledHover {...props} />;
};

export default Hover;
