import React from "react";
import styled from "styled-components";

type sensorList = {
  text: string;
};

function SensorList(props: sensorList) {
  const { text } = props;

  return <StyledSensorItem>{text}</StyledSensorItem>;
}

export default SensorList;

const StyledSensorItem = styled.li`
  min-width: 150px;
  text-align: center;
  padding: 10px;
  border: 1px solid #000;
  cursor: pointer;
  &:hover {
    background-color: #6f86d6;
    color: #fff;
  }
`;
