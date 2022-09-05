import React, { PropsWithChildren } from "react";
import { PaddingProps } from "./Props";
import { StyledPadding } from "./StyleObj";

function Padding(props: PropsWithChildren<PaddingProps>) {
  return <StyledPadding {...props} />;
}

export default Padding;
