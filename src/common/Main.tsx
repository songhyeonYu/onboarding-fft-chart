import React from "react";
import styled from "styled-components";

type MainProps = {
  children: React.ReactNode;
  className?: string;
};

function Main(props: MainProps) {
  const { children, className } = props;

  return <StyledMain className={className}>{children}</StyledMain>;
}

export default Main;

const StyledMain = styled.main`
  padding: 30px 4rem;
  &.chart {
    padding: 30px 10%;
  }
`;
