import React from "react";
import { View, StyleSheet } from "react-native";

type StatHeaderProps = {

}

const StatHeader = (props: StatHeaderProps) => {
  const { container } = styles;

  return (
    <View style={container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: "blue",
    marginBottom: 16
  }
});

export default StatHeader;
