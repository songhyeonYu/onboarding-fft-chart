import React from "react";
import LoginContainer from "./LoginContainer";
import SignupContainer from "./SignupContainer";
import { useRecoilState } from "recoil";
import { pageStepState } from "../atoms/join";

function JoinContainer() {
  const [pageStep] = useRecoilState(pageStepState);
  if (pageStep === "login") return <LoginContainer />;
  if (pageStep === "signup") return <SignupContainer />;

  return null;
}

export default JoinContainer;
