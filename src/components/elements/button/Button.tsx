import React from "react";
import { ButtonProps } from "./Props";
import { StyledButton } from "./StyleObj";
import Text from "../text/Text";

function Button(props: ButtonProps) {
  const { text, disabled, onClick, size } = props;
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      <Text text={text} size={size} />
    </StyledButton>
  );
}

export default Button;
