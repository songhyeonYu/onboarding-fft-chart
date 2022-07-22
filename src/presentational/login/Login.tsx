import React from "react";
import styled from "styled-components";
import { pageStepState } from "../../atoms/join";
import { useSetRecoilState } from "recoil";

type LoginProps = {
  active: boolean;
  loginSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Login(props: LoginProps) {
  const { active, loginSubmit } = props;

  const setPageStep = useSetRecoilState(pageStepState);

  const signupClick = () => {
    setPageStep("signup");
  };

  return (
    <StyledLogin className={"login-footer"}>
      <StyledSignupMove onClick={signupClick}>회원가입</StyledSignupMove>
      <button type="button" disabled={active} onClick={loginSubmit}>
        로그인
      </button>
    </StyledLogin>
  );
}

export default Login;

const StyledLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSignupMove = styled.span`
  cursor: pointer;
  color: #666;
  &:hover {
    color: #000;
  }
`;
