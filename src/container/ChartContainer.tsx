import React, { useRef } from "react";
import styled from "styled-components";
import LineChart from "../presentational/chart/LineChart";
import SensorList from "../presentational/chart/SensorList";
import ChartData from "../mock/testexample.json";
import AeqTimeList from "../presentational/chart/AeqTimeList";
import useElementObserver from "../hooks/useElementObserver";

function ChartContainer() {
  const chartRef = useRef<HTMLDivElement>(null);
  const observerElWidth = useElementObserver(chartRef);

  return (
    <StyledChartWrap>
      <StyledChartHeader>
        {ChartData.data.fftThresholdData.map((el, index) => (
          <SensorList key={index} text={el.bandName} />
        ))}
      </StyledChartHeader>
      <StyledChartMainArea>
        <StyledChartAeqArea>
          {ChartData.data.acqTime.map((el, index) => (
            <AeqTimeList key={index} date={el} />
          ))}
        </StyledChartAeqArea>
        <StyledChartContentArea ref={chartRef}>
          <LineChart width={observerElWidth} />
        </StyledChartContentArea>
      </StyledChartMainArea>
    </StyledChartWrap>
  );
}

export default ChartContainer;

const StyledChartWrap = styled.div`
  border: 1px solid black;
`;

const StyledChartHeader = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 20px 2rem;
  border-bottom: 1px solid #000;
`;

const StyledChartMainArea = styled.div`
  display: flex;
`;

const StyledChartAeqArea = styled.ul`
  border-right: 1px solid #000;
`;

const StyledChartContentArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
