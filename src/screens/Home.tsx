import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItem
} from 'react-native';

import { HomeProps } from '../App';
import HomeTile from "../components/HomeTile";
import { tileList, Tile } from '../components/HomeTile/types';
import TodayRow from '../components/TodayRow';

const HomeScreen = (props: HomeProps) => {
  const { navigation } = props;
  const { container, tileContainer, label, todayContainer } = styles;

  const renderItem: ListRenderItem<Tile> = ({ item }) => {
    const params = item.paramType ? { type: item.paramType } : undefined;

    return (
      <HomeTile
        content={item}
        onPress={() => navigation.navigate(item.navigate, params)}
      />
    )
  };

  return (
    <View style={container}>
      <View style={tileContainer}>
        <FlatList<Tile>
          data={tileList}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={todayContainer}>
        <Text style={label}>So Far Today</Text>
        <TodayRow label={"Shadow Stones Dropped"} count={1234} />
        <TodayRow label={"Adventures Completed"} count={110} />
        <TodayRow label={"Blockchain Items Looted"} count={12} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  tileContainer: {
    margin: 8
  },
  todayContainer: {
    marginTop: 32,
    alignSelf: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginBottom: 16,
    textDecorationLine: "underline"
  }
});

export default HomeScreen;