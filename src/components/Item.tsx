import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import IItemData from "../api/types/items.type";


export type ItemProps = {
  item: IItemData;
  onPress: () => void;
};

const Item = (props: ItemProps) => {
  const { item, onPress } = props;
  const { container, label } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={{width: "50%", height: 200}}>
      <View style={container}>
        <Text style={label}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 16,
    margin: 8,
    borderRadius: 10
  },
  label: {
    color: "white"
  }
});
