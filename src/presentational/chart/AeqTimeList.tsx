import React from "react";
import styled from "styled-components";

type AeqTimeProps = {
  date: string;
};

function AeqTimeList(props: AeqTimeProps) {
  const { date } = props;
  return <StyledAeqTimeItem>{date}</StyledAeqTimeItem>;
}

export default AeqTimeList;

const StyledAeqTimeItem = styled.li`
  text-align: center;
  padding: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
`;
