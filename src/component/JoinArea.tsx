import React from "react";
import styled from "styled-components";

type LoginAreaProps = {
  children: React.ReactNode;
};

function JoinArea({ children }: LoginAreaProps) {
  return (
    <StyledJoinArea>
      <div className="login-header">FFT Chart</div>
      {children}
    </StyledJoinArea>
  );
}

export default JoinArea;

const StyledJoinArea = styled.section`
  min-width: 320px;
  padding: 3vh;
  background-color: #fff;
  box-shadow: 10px 5px 5px #999;
  .login-header {
    margin-bottom: 20px;
    font-size: 1.3rem;
  }
`;
