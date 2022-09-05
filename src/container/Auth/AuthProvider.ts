import { createContext, Dispatch } from "react";

import { AuthState, AuthAction } from "./type";

export const AuthInfo_Default: AuthState = {
  id: "",
  nickname: "",
  token: false,
};

export const AuthContext = createContext<AuthState>(AuthInfo_Default);
export const AuthDispatchContext = createContext<Dispatch<AuthAction>>(
  () => null
);
