import React, { PropsWithChildren } from "react";
import { WrapProps } from "./Props";
import { StyledWrap } from "./StyleObj";

function Wrap(props: PropsWithChildren<WrapProps>) {
  const { children } = props;
  return <StyledWrap {...props}>{children} </StyledWrap>;
}

export default Wrap;
