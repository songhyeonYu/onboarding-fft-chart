import React, { PropsWithChildren } from "react";
import { BorderProps } from "./Props";
import { StyledBorder } from "./StyleObj";

function Border(props: PropsWithChildren<BorderProps>) {
  return <StyledBorder {...props} />;
}

export default Border;
