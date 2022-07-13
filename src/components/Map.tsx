import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import IMapData from "../api/types/maps.type";

export type MapProps = {
  map: IMapData;
  onPress: () => void;
};

const Map = (props: MapProps) => {
  const { map, onPress } = props;
  const { container, label } = styles;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <Text style={label}>{map.name}</Text>
      </View>
    </TouchableOpacity>
  )
};

export default Map;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 160,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "flex-end",
    alignSelf: "center",
    borderRadius: 10,
    padding: 16,
    margin: 8
  },
  label: {
    color: "white"
  }
});
