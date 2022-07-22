import React from "react";
import styled from "styled-components";

type JoinInputProps = {
  type: string;
  label: string;
  value: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

function JoinInput(props: JoinInputProps) {
  const { type, label, value, id, onChange, placeholder } = props;

  return (
    <StyledInputArea>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        type={type}
        value={value}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </StyledInputArea>
  );
}

export default JoinInput;

const StyledInputArea = styled.div`
  & + & {
    margin-top: 10px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
