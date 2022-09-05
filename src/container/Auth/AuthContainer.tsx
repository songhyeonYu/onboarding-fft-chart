import React, { useReducer } from "react";
import {
  AuthContext,
  AuthDispatchContext,
  AuthInfo_Default,
} from "./AuthProvider";
import { AuthAction, AuthContainerProps, AuthState } from "./type";

const authReducer = (state: AuthState, action: AuthAction) => {
  const { type, user } = action;
  switch (type) {
    case "changeAuth":
      return {
        id: user.id,
        nickname: user.nickname,
        token: true,
      };
  }
};

function AuthContainer({ children }: AuthContainerProps) {
  const [user, dispatch] = useReducer(authReducer, AuthInfo_Default);

  return (
    <AuthContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}

export default AuthContainer;
