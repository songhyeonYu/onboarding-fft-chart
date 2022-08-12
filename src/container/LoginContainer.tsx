import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { autoLoginAtom, loginAtom } from "../atoms/join";
import JoinInput from "../common/JoinInput";
import Login from "../presentational/login/Login";
import { loginRequest } from "../service/login";

function LoginContainer() {
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    id: "",
    pw: "",
  });
  const { id, pw } = loginInput;

  const [loginToken, setLoginToken] = useRecoilState(loginAtom);
  const [autoLoginInfo, setAutoLoginInfo] = useRecoilState(autoLoginAtom);

  const [autoLogin, setAutoLogin] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginInput({
      ...loginInput,
      [id]: value.trim(),
    });
  };

  const loginBtnClick = (): void => {
    const userInfo = loginRequest(id, pw);
    if (!userInfo) {
      alert("아이디 또는 패스워드를 확인 해주세요!");
      setLoginInput({ ...loginInput, pw: "" });
      return;
    }
    if (autoLogin)
      setAutoLoginInfo({
        id: userInfo.id,
        nickname: userInfo.nickName,
        token: true,
      });
    else if (!autoLogin)
      setLoginToken({
        id: userInfo.id,
        nickname: userInfo.nickName,
        token: true,
      });

    navigate("./chart", { replace: true });
  };

  useEffect(() => {
    if (loginToken.token || autoLoginInfo.token) {
      navigate("./chart", { replace: true });
    }
  });

  return (
    <>
      <JoinInput
        type={"text"}
        label={"아이디"}
        value={id}
        id={"id"}
        placeholder={"아이디를 6글자 이상 입력해주세요!"}
        onChange={onChange}
      />
      <JoinInput
        type={"password"}
        label={"패스워드"}
        value={pw}
        id={"pw"}
        placeholder={"비밀번호를 6글자 이상 입력해주세요!"}
        onChange={onChange}
      />
      <Login
        active={!(id.length > 5 && pw.length > 5)}
        loginSubmit={loginBtnClick}
        auto={autoLogin}
        autoLoginCheck={() => setAutoLogin((prev) => !prev)}
      />
    </>
  );
}

export default LoginContainer;
