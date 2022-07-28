import React, { useState } from "react";
import ECharts from "echarts-for-react";
import chartMock from "../../mock/testexample.json";

type size = {
  width: number;
};

const LineChart = (props: size) => {
  const { width } = props;

  const [options] = useState({
    xAxis: {
      type: "category",
      data: chartMock.data.fftChartData.map((el) => el.frequency.toFixed(2)),
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    series: [
      {
        name: "FFT Data",
        type: "line",
        symbol: "none",
        sampling: "test",
        itemStyle: {
          color: "#6f86d6",
        },
        data: chartMock.data.fftChartData.map((el) => el.amplitude.toFixed(2)),
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    title: {
      left: "center",
      text: "FFT Chart",
    },
    // toolbox: {
    //   feature: {
    //     dataZoom: {
    //       yAxisIndex: "none",
    //     },
    //     restore: {},
    //     saveAsImage: {},
    //   },
    // },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 10,
      },
    ],
    grid: {
      width: "99%",
      right: "1%",
      height: "200px",
      containLabel: true,
      show: true,
    },
    renderer: "svg",
  });

  return (
    <ECharts
      option={options}
      opts={{ renderer: "svg", width: width === 0 ? 0 : width - 100 }}
    />
  );
};

export default LineChart;
