import React, { useRef } from "react";
import { FFTCHART_OPTION } from "./Option";
import BaseChart from "../../../components/elements/BaseChart/BaseChart";
import useElementObserver from "../../../hooks/useElementObserver";
import Ref from "../../../components/elements/ref/Ref";
import { LineChartProps } from "./Props";

function LineChart(props: LineChartProps) {
  const { fftData } = props;
  const chartRef = useRef<HTMLDivElement>(null);
  const observerElWidth = useElementObserver(chartRef);

  const option = FFTCHART_OPTION(fftData);

  return (
    <Ref
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      ref={chartRef}
    >
      <BaseChart option={option} width={observerElWidth} />
    </Ref>
  );
}

export default LineChart;
