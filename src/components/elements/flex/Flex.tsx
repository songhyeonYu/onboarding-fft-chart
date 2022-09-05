import React, { PropsWithChildren } from "react";
import { StyledFlex } from "./StyleObj";
import { FlexProps } from "./Props";

const Flex = (props: PropsWithChildren<FlexProps>) => {
  return <StyledFlex {...props} />;
};

export default Flex;
