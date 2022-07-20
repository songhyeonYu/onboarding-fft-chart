import React from "react";
import styled from "styled-components";
import { pageStepState } from "../atoms/join";
import { useRecoilState } from "recoil";

type LoginProps = {
  active: boolean;
  loginSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Login({ active, loginSubmit }: LoginProps) {
  const [_, setPageStep] = useRecoilState(pageStepState);
  const signupClick = () => {
    setPageStep("signup");
  };
  return (
    <StyledLogin className={"login-footer"}>
      <span onClick={signupClick}>회원가입</span>
      <button type="button" disabled={active} onClick={loginSubmit}>
        로그인
      </button>
    </StyledLogin>
  );
}

export default Login;

const StyledLogin = styled.div`
  span {
    &:hover {
      color: #666;
    }
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
