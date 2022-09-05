import { selector } from 'recoil';
import { fetchChartData } from '../service/chart/chart';

export const fftChartDataQuery = selector({
  key: '@fftChartDataQuery',
  get: async () => {
    try {
      const { data, status } = await fetchChartData();
      switch (status) {
        case 200:
          return data;
        default:
          break;
      }
    } catch (e: any) {
      const {
        response: { status },
      } = e;
      switch (status) {
        case 404:
          throw status;
        default:
          throw status;
      }
    }
  },
});
