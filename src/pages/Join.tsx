import React from "react";
import styled from "styled-components";
import LoginContainer from "../container/LoginContainer";
import JoinArea from "../component/JoinArea";

function Join() {
  return (
    <StyledJoin>
      <JoinArea>
        <LoginContainer />
      </JoinArea>
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
