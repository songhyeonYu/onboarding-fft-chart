import React from 'react';
import Padding from '../../components/elements/padding/Padding';
import Border from '../../components/elements/border/Border';
import Header from '../../compositions/header/Header';
import FFTChart from './FFTChart/FFTChart';
import LoadingSuspense from '../../components/elements/loading/LoadingSuspense';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '../../components/elements/error/ErrorPage';
import { useRecoilRefresher_UNSTABLE } from 'recoil';
import { fftChartDataQuery } from '../../atoms/chart';

function ChartView() {
  const refresh = useRecoilRefresher_UNSTABLE(fftChartDataQuery);
  return (
    <>
      <Header />
      <Padding padding={'30px 4rem'}>
        <Border borderWidth={'1px'}>
          <ErrorBoundary
            FallbackComponent={ErrorComponent}
            onReset={() => refresh()}
          >
            <LoadingSuspense>
              <FFTChart />
            </LoadingSuspense>
          </ErrorBoundary>
        </Border>
      </Padding>
    </>
  );
}

export default ChartView;
