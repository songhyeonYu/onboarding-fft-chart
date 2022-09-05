import { FFTChartDataType } from "./Type";

export const FFTCHART_OPTION = (FFtChartData: FFTChartDataType) => {
  const toFixed = (el: number) => el.toFixed(2);
  return {
    xAxis: {
      type: "category",
      data: FFtChartData.map((el) => toFixed(el.frequency)),
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
        data: FFtChartData.map((el) => toFixed(el.amplitude)),
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    title: {
      left: "center",
      text: "FFT ChartView",
    },
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
      containLabel: true,
      show: true,
    },
    renderer: "svg",
  };
};
