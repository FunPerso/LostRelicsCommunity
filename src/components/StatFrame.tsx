import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import IShadowStoneData from "../api/types/shadowStone.type";
import FrequencySelector from "./FrequencySelector";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

type StatFrameProps = {
  data: IShadowStoneData | undefined;
};

const defaultInUse = {
  runCount: 0,
  runLooted: 0,
  count: 0,
  maps: {},
}

const StatFrame = (props: StatFrameProps) => {
  const { data } = props;
  const { container } = styles;
  const [frequency, setFrequency] = useState(0)

  const getInUseData = () => {
    if (!data) return defaultInUse;
    if (frequency === 0) return data.dayValue;
    else if (frequency === 1) return data.weekValue;
    else return data.monthValue;
  }

  const getData = () => {
    const inUse = getInUseData();

    if (inUse) {
      const maps = Object.keys(inUse.maps);

      return maps.map((mapName) => {
        const r = Math.floor(55 + Math.random() * 200);
        const g = Math.floor(55 + Math.random() * 200);
        const b = Math.floor(55 + Math.random() * 200);

        return {
          name: mapName,
          count: inUse.maps[mapName],
          color: `rgba(${r}, ${g}, ${b}, 1)`,
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      })
    }
    return []
  };

  const inUse = getInUseData();

  return (
    <View style={container}>
      <FrequencySelector onChange={setFrequency} />

      {data && (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
          <Text style={{ color: "white" }}>{`Total looted: ${inUse?.count || 0}`}</Text>
          <Text style={{ color: "white" }}>{`% adventures dropping SS: ${Math.floor(inUse?.runLooted * 100 / inUse.runCount)}%`}</Text>
          <PieChart
            data={getData()}
            width={Dimensions.get("screen").width * 0.9}
            height={(Dimensions.get("screen").width * 0.9) / 1.8}
            chartConfig={{
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            accessor={"count"}
            backgroundColor={"transparent"}
            paddingLeft={"0"}
            center={[0, 0]}

          />
        </View>
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    marginBottom: 8
  }
});

export default StatFrame;