export type AuthState = {
  id: string;
  nickName: string;
  auth: boolean;
};

export type AuthAction = { type: "changeAuth"; user: AuthState };
