import React from "react";
import { Text, View } from "react-native";

import { TodayRowProps } from "./types";
import { styles } from "./styles";

const TodayRow = (props: TodayRowProps) => {
  const { count, label } = props;
  const { container, text } = styles;

  return (
    <View style={container}>
      <Text style={text}>{` - ${count} ${label}`}</Text>
    </View>
  );
};

export default TodayRow;