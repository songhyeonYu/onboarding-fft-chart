export type ThresholdData = {
  bandName: string;
  startPoint: number;
  endPoint: number;
  bandAlarmThreshold: number;
  bandTripThreshold: number;
};

export type ThresholdItemProps = {
  text: string;
};

export type ThresholdListProps = {
  ThresholdList: ThresholdData[];
};
