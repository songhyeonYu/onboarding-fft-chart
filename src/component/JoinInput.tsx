import React from "react";
import styled from "styled-components";

type JoinInputProps = {
  type: string;
  label: string;
  value: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function JoinInput({ type, label, value, id, onChange }: JoinInputProps) {
  return (
    <StyledJoinInput>
      <label htmlFor={id}>{label}</label>
      <input type={type} value={value} id={id} onChange={onChange} />
    </StyledJoinInput>
  );
}

export default JoinInput;

const StyledJoinInput = styled.div`
  & + & {
    margin-top: 10px;
  }
  input {
    width: 100%;
    margin-top: 10px;
  }
`;
