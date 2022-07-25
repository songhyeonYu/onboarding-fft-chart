import React from "react";
import styled from "styled-components";

type MainProps = {
  children: React.ReactNode;
};

function Main(props: MainProps) {
  const { children } = props;

  return <StyledMain>{children}</StyledMain>;
}

export default Main;

const StyledMain = styled.main`
  padding: 30px 4rem;
`;
