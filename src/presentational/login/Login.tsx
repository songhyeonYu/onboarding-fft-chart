import React from "react";
import styled from "styled-components";
import { pageStepAtom } from "../../atoms/join";
import { useSetRecoilState } from "recoil";

type LoginProps = {
  active: boolean;
  auto: boolean;
  loginSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  autoLoginCheck: () => void;
};

function Login(props: LoginProps) {
  const { active, auto, loginSubmit, autoLoginCheck } = props;
  const setPageStep = useSetRecoilState(pageStepAtom);

  const signupClick = () => {
    setPageStep("signup");
  };

  return (
    <>
      <StyledAutoLogin>
        <StyledAutoCheckbox
          checked={auto}
          type={"checkbox"}
          id={"autoLogin"}
          onChange={autoLoginCheck}
        />
        <StyledAutoLabel htmlFor={"autoLogin"}>자동 로그인</StyledAutoLabel>
      </StyledAutoLogin>
      <StyledLogin className={"login-footer"}>
        <StyledSignupMove onClick={signupClick}>회원가입</StyledSignupMove>
        <button type="button" disabled={active} onClick={loginSubmit}>
          로그인
        </button>
      </StyledLogin>
    </>
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

const StyledAutoLogin = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
`;

const StyledAutoCheckbox = styled.input`
  margin: 0;
  cursor: pointer;
`;

const StyledAutoLabel = styled.label`
  font-size: 0.8rem;
  cursor: pointer;
`;
