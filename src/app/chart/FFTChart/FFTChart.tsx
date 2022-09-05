import React from 'react';
import Border from '../../../components/elements/border/Border';
import Flex from '../../../components/elements/flex/Flex';
import AeqTimeList from './aeqList/AeqTimeList';
import ThresholdList from './thresholdList/ThresholdList';
import { useRecoilValue } from 'recoil';
import { fftChartDataQuery } from '../../../atoms/chart';
import LineChart from '../../../compositions/chart/lineChart/LineChart';

function FFTChart() {
  const chartDataList = useRecoilValue(fftChartDataQuery);
  const { fftThresholdData, acqTime, fftChartData } = chartDataList;
  // throw 'e';
  return (
    <>
      <Border borderWidth={'0 0 1px 0'}>
        <ThresholdList ThresholdList={fftThresholdData} />
      </Border>
      <Flex direction={'row'}>
        <AeqTimeList aeqTimeList={acqTime} />
        <LineChart fftData={fftChartData} />
      </Flex>
    </>
  );
}

export default FFTChart;
