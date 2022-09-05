import React from "react";

export type AuthState = {
  id: string;
  nickname: string;
  token: boolean;
};

export type AuthAction = { type: "changeAuth"; user: AuthState };

export type AuthContainerProps = {
  children: React.ReactNode;
};
