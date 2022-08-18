import React, {
  useState,
  createContext,
  useEffect,
  Dispatch,
  useReducer,
} from "react";
import { useRecoilValue } from "recoil";
import { autoLoginAtom, loginAtom } from "../../atoms/join";
import { AuthState, AuthAction } from "./type";
import reducer from "./reducer";

type AuthRouterProps = {
  children: JSX.Element | JSX.Element[];
};

type AuthDispatch = Dispatch<AuthAction>;

export const AuthContext = createContext<AuthState | null>(null);
export const AuthDispatchContext = createContext<AuthDispatch | null>(null);

export function AuthProvider(props: AuthRouterProps) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    id: "",
    nickName: "",
    auth: false,
  });

  const loginAuth = useRecoilValue(loginAtom);
  const autoLoginAuth = useRecoilValue(autoLoginAtom);

  const [pass, setPass] = useState(false);

  useEffect(() => {
    if (autoLoginAuth.token || loginAuth.token) {
      dispatch({
        type: "changeAuth",
        user: {
          id: autoLoginAuth.id ? autoLoginAuth.id : loginAuth.id,
          nickName: autoLoginAuth.nickname
            ? autoLoginAuth.nickname
            : loginAuth.nickname,
          auth: true,
        },
      });
    }
    setPass(true);
  }, [loginAuth, autoLoginAuth]);

  if (!pass) {
    return null;
  }

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}
