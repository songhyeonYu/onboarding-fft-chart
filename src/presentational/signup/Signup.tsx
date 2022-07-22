import React from "react";
import styled from "styled-components";
import { pageStepState } from "../../atoms/join";
import { useSetRecoilState } from "recoil";

type SignupProps = {
  active: boolean;
  signupSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Signup(props: SignupProps) {
  const { active, signupSubmit } = props;

  const setPageStep = useSetRecoilState(pageStepState);

  const loginClick = () => {
    setPageStep("login");
  };

  return (
    <StyledSignup className={"login-footer"}>
      <StyledLoginMove onClick={loginClick}>로그인 하러 가기</StyledLoginMove>
      <button type="button" disabled={active} onClick={signupSubmit}>
        가입하기
      </button>
    </StyledSignup>
  );
}

export default Signup;

const StyledSignup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLoginMove = styled.span`
  font-size: 0.7rem;
  cursor: pointer;
  color: #666;
  &:hover {
    color: #000;
  }
`;
