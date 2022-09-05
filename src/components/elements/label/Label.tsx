import React from "react";
import { LabelProps } from "./Props";
import { StyledLabel } from "./StyleObj";
import Text from "../text/Text";

function Label(props: LabelProps) {
  const { id, text, fontSize } = props;
  return (
    <StyledLabel htmlFor={id}>
      <Text text={text} size={fontSize} />
    </StyledLabel>
  );
}

export default Label;
