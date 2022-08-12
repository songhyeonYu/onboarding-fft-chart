import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { autoLoginAtom, loginAtom } from "../atoms/join";

type AuthRouterProps = {
  children: JSX.Element | JSX.Element[];
};

function RequireAuth(props: AuthRouterProps) {
  const loginAuth = useRecoilValue(loginAtom);
  const autoLoginAuth = useRecoilValue(autoLoginAtom);
  const { children } = props;

  if (!loginAuth.token && !autoLoginAuth.token) {
    alert("로그인이 필요한 서비스입니다.");
    return <Navigate to={"/"} />;
  }
  return <>{children}</>;
}

export default RequireAuth;
