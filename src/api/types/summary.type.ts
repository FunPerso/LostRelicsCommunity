export default interface ISummaryData {
  maps: any;
  bestSSDropToday: {
    map: string;
    count: number;
  };
  mostPlayedMap: {
    map: string;
    count: number;
  };
  SSLooted: number;
  BCLooted: number;
  timeSpendInAdventure: number;
  successfulCount: number;
  failedCount: number;
};
