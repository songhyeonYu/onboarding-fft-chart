import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LineChart from "../presentational/chart/LineChart";
import SensorList from "../presentational/chart/SensorList";
import ChartData from "../mock/testexample.json";
import AeqTimeList from "../presentational/chart/AeqTimeList";
import useDebounce from "../hooks/useDebounce";
import useResize from "../hooks/useResize";

function ChartContainer() {
  const [chartWidth, setChartWidth] = useState(0);
  const chartRef = useRef<HTMLDivElement>(null);
  const [width, ref] = useResize();
  const debouncedValue = useDebounce(width, 1000);

  const useResizeEvent = () => {
    ref(chartRef.current);
  };

  useEffect(() => {
    setChartWidth(debouncedValue);
  }, [debouncedValue]);

  useEffect(() => {
    if (chartRef.current) setChartWidth(chartRef.current.clientWidth);
    window.addEventListener("resize", useResizeEvent);
    return () => {
      window.removeEventListener("resize", useResizeEvent);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <StyledChartWrap>
      <StyledChartHeader>
        {ChartData.data.fftThresholdData.map((el, index) => (
          <SensorList key={index} text={el.bandName} />
        ))}
      </StyledChartHeader>
      <StyledChartMainArea>
        <StyledChartAeqArea>
          <AeqTimeList date={"2021-03-29 04:27:07"} />
          <AeqTimeList date={"2021-03-29 04:27:07"} />
          <AeqTimeList date={"2021-03-29 04:27:07"} />
          <AeqTimeList date={"2021-03-29 04:27:07"} />
        </StyledChartAeqArea>
        <StyledChartContentArea ref={chartRef}>
          <LineChart width={chartWidth} />
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
