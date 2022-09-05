import React from "react";
import { InputLabelProps } from "./Props";
import Flex from "../../elements/flex/Flex";
import Input from "../../elements/input/Input";
import Label from "../../elements/label/Label";

function InputWithLabel(props: InputLabelProps) {
  const { type, value, text, id, onChange, placeholder, gap = "10px" } = props;
  return (
    <Flex direction={"column"} gap={gap}>
      <Label text={text} id={id} />
      <Input
        type={type}
        value={value}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Flex>
  );
}

export default InputWithLabel;
