import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItem
} from "react-native";

import { StatsProps } from "../App";
import StatHeader from "../components/StatHeader";
import StatFrame from "../components/StatFrame";
import ShadowStoneDataService from "../api/routes/shadowStone.route";
import IShadowStoneData from "../api/types/shadowStone.type";

const Stats = (props: StatsProps) => {
  const { navigation, route } = props;
  const { container } = styles;
  const [data, setData] = useState<IShadowStoneData>();

  useEffect(() => {
    ShadowStoneDataService.get()
      .then(result => setData(result.data))
  }, [])

  return (
    <View style={container}>
      {/* <Text>{route.params.type}</Text> */}
      <StatHeader />
      <StatFrame data={data}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black"
  }
});

export default Stats;
