export default interface IShadowStoneData {
  dayValue: Value;
  weekValue: Value;
  monthValue: Value;
};

type Value = {
  runCount: number,
  runLooted: number,
  count: number,
  maps: any
};