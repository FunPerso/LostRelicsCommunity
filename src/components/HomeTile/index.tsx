import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { HomeTileProps } from "./types";
import { styles } from "./styles";

const HomeTile = (props: HomeTileProps) => {
  const { content, onPress } = props;
  const { container, text } = styles;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <Text style={text}>{content.label}</Text>
      </View>
    </TouchableOpacity>

  );
};

export default HomeTile;