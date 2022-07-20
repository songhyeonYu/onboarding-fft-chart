import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginIdState, loginPwState } from "../atoms/join";
import JoinInput from "../component/JoinInput";
import Login from "../presentational/Login";

function LoginContainer() {
  const [loginId, setLoginId] = useRecoilState(loginIdState);
  const [loginPw, setLoginPw] = useRecoilState(loginPwState);

  const loginIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value);
  };

  const loginPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginPw(e.target.value);
  };

  return (
    <>
      <JoinInput
        type={"text"}
        label={"아이디"}
        value={loginId}
        id={"아이디"}
        onChange={loginIdChange}
      />
      <JoinInput
        type={"password"}
        label={"패스워드"}
        value={loginPw}
        id={"아이디"}
        onChange={loginPwChange}
      />
      <Login active={false} />
    </>
  );
}

export default LoginContainer;
