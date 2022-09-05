import client from "../common/AxiosInstance";

export const fetchChartData = async () => {
  return await client.get("/chart");
};
