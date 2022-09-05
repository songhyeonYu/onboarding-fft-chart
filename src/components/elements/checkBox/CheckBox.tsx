import React from "react";
import { StyledCheckBox } from "./StyleObj";
import { CheckBoxProps } from "./Props";

const CheckBox = (props: CheckBoxProps) => {
  const { onChange, checked, id } = props;
  return (
    <StyledCheckBox
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id={id}
    />
  );
};

export default CheckBox;
