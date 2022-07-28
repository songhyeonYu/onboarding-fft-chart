import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "../atoms/join";

type prop = {
  children: React.ReactNode;
};

function RequireAuth(props: prop): JSX.Element {
  const loginAuth = useRecoilValue(loginState);
  const { children } = props;

  if (!loginAuth.token) {
    alert("로그인이 필요한 서비스입니다.");
    return <Navigate to={"/"} />;
  }
  return <>{children}</>;
}

export default RequireAuth;