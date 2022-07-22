import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginIdState, loginPwState } from "../atoms/join";
import JoinInput from "../common/JoinInput";
import Login from "../presentational/login/Login";
import { loginRequest } from "../service/login";
import { loginState } from "../atoms/join";

function LoginContainer() {
  const navigate = useNavigate();

  const [loginToken, setLoginToken] = useRecoilState(loginState);
  const [loginId, setLoginId] = useRecoilState(loginIdState);
  const [loginPw, setLoginPw] = useRecoilState(loginPwState);

  const loginIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value);
  };

  const loginPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginPw(e.target.value);
  };

  const loginBtnClick = (): void => {
    if (!loginRequest(loginId, loginPw)) {
      alert("아이디 또는 패스워드를 확인 해주세요!");
      setLoginPw("");
      return;
    }
    setLoginToken({ id: loginId, pw: loginPw, token: true });
    navigate("./chart", { replace: true });
  };

  useEffect(() => {
    if (loginToken.token) {
      navigate("./chart", { replace: true });
    }
  }, []);

  return (
    <>
      <JoinInput
        type={"text"}
        label={"아이디"}
        value={loginId}
        id={"아이디"}
        placeholder={"아이디를 6글자 이상 입력해주세요!"}
        onChange={loginIdChange}
      />
      <JoinInput
        type={"password"}
        label={"패스워드"}
        value={loginPw}
        id={"아이디"}
        placeholder={"비밀번호를 6글자 이상 입력해주세요!"}
        onChange={loginPwChange}
      />
      <Login
        active={!(loginId.length > 5 && loginPw.length > 5)}
        loginSubmit={loginBtnClick}
      />
    </>
  );
}

export default LoginContainer;
