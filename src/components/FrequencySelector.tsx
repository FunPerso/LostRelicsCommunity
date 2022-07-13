import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type FrequencySelectorProps = {
  onChange: (frequency: number) => void;
};

const FrequencySelector = (props: FrequencySelectorProps) => {
  const { onChange } = props;
  const { container, label, selectedLabel } = styles;
  const [selected, setSelected] = useState(0);
  const toDisplay = ["Past Day", "Past Week", "Past Month"];

  const frequencyPressed = (index: number) => {
    setSelected(index);
    onChange(index);
  };

  return (
    <View style={container}>
      {toDisplay.map((props, index) => (
        <TouchableOpacity onPress={() => frequencyPressed(index)} key={`${index}`}>
          <Text style={[label, selected === index ? selectedLabel : {}]}>{props}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 16
  },
  label: {
    color: "white",
    padding: 8,
    // borderWidth: 1,
    // borderColor: "white"
  },
  selectedLabel: {
    textDecorationLine: "underline"
  }
});

export default FrequencySelector;