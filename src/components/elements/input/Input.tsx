import React from "react";
import { InputProps } from "./Props";
import { StyledInput } from "./StyleObj";

function Input(props: InputProps) {
  const { type, value, id, onChange, placeholder } = props;
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
    />
  );
}

export default Input;
