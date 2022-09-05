import React, { PropsWithChildren } from "react";
import { StyledCenter } from "./StyleObj";

const Center = (props: PropsWithChildren<any>) => {
  const { children } = props;
  return <StyledCenter>{children}</StyledCenter>;
};

export default Center;
