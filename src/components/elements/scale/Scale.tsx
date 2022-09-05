import React, { PropsWithChildren } from "react";
import { ScaleProps } from "./Props";
import { StyledScale } from "./StyleObj";

function Scale(props: PropsWithChildren<ScaleProps>) {
  const { children } = props;
  return <StyledScale {...props}>{children}</StyledScale>;
}

export default Scale;
