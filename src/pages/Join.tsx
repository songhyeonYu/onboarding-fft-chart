import React from "react";
import styled from "styled-components";
import JoinArea from "../component/JoinArea";
import JoinContainer from "../container/JoinContainer";

function Join() {
  return (
    <StyledJoin>
      <JoinArea>
        <JoinContainer />
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
