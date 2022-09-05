import React from "react";
import { BaseChartProps } from "./Props";
import ECharts from "echarts-for-react";

function BaseChart(props: BaseChartProps) {
  const { width, option } = props;
  return (
    <ECharts
      option={option}
      opts={{ renderer: "svg", width: width === 0 ? 0 : width - 100 }}
    />
  );
}

export default BaseChart;
