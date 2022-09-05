import React from "react";
import { TextProps } from "./Props";
import { StyledText } from "./StyleObj";

function Text(props: TextProps) {
  const { text, onClick } = props;
  return (
    <StyledText onClick={onClick} {...props}>
      {text}
    </StyledText>
  );
}

export default Text;
