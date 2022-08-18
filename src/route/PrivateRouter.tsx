import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Auth/AuthProvider";

type AuthRouterProps = {
  children: JSX.Element | JSX.Element[];
};

function PrivateRouter(props: AuthRouterProps) {
  const { children } = props;

  const user = useContext(AuthContext);

  if (user && !user.auth) {
    alert("로그인이 필요한 서비스입니다.");
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
}

export default PrivateRouter;
