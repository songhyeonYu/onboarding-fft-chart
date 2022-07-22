import React from "react";
import styled from "styled-components";
import JoinArea from "../common/JoinArea";
import LoginContainer from "../container/LoginContainer";
import SignupContainer from "../container/SignupContainer";
import { useRecoilValue } from "recoil";
import { pageStepState } from "../atoms/join";

type pageType = {
  [pageStep: string]: JSX.Element;
};

function Join() {
  const pageStep = useRecoilValue(pageStepState);

  const pageStepObject: pageType = {
    login: <LoginContainer />,
    signup: <SignupContainer />,
  };

  return (
    <StyledJoin>
      <JoinArea>{pageStepObject[pageStep]}</JoinArea>
    </StyledJoin>
  );
}

export default Join;

const StyledJoin = styled.main`
  min-height: 100vh;
  background-color: #6f86d6;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-footer {
    margin-top: 20px;
  }
`;
