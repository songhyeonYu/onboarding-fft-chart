import React from "react";
import styled from "styled-components";

type WrapProps = {
  children: JSX.Element | JSX.Element[];
};

function Wrap(props: WrapProps) {
  const { children } = props;

  return (
    <StyledWrap>
      <>{children}</>
    </StyledWrap>
  );
}

export default Wrap;

const StyledWrap = styled.div`
  min-height: 100vh;
`;
