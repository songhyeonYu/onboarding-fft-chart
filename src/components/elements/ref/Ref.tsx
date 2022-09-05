import React, { forwardRef, PropsWithChildren } from "react";
import { RefProps } from "./Props";
import { StyledRef } from "./StyleObj";

const Ref = forwardRef<HTMLDivElement, PropsWithChildren<RefProps>>(
  (props, ref) => {
    return <StyledRef ref={ref} {...props} />;
  }
);

export default Ref;
