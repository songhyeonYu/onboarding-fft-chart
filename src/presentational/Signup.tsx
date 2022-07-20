import React from "react";
import styled from "styled-components";
import { pageStepState } from "../atoms/join";
import { useRecoilState } from "recoil";

type SignupProps = {
  active: boolean;
  signupSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Signup({ active, signupSubmit }: SignupProps) {
  const [_, setPageStep] = useRecoilState(pageStepState);
  const loginClick = () => {
    setPageStep("login");
  };
  return (
    <StyledSignup className={"login-footer"}>
      <span onClick={loginClick}>로그인 하러 가기</span>
      <button type="button" disabled={active} onClick={signupSubmit}>
        가입하기
      </button>
    </StyledSignup>
  );
}

export default Signup;

const StyledSignup = styled.div`
  span {
    font-size: 0.7rem;
    cursor: pointer;
    color: #666;
    &:hover {
      color: #000;
    }
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
