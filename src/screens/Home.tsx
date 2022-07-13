import React, { useEffect, useState } from 'react';
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
import ItemDataService from "../api/routes/items.route";
import SummaryDataService from "../api/routes/summary.route";
import IItemData from '../api/types/items.type';
import ISummaryData from '../api/types/summary.type';

const HomeScreen = (props: HomeProps) => {
  const { navigation } = props;
  const { container, tileContainer, label, todayContainer } = styles;
  const [data, setData] = useState<ISummaryData>();

  useEffect(() => {
    SummaryDataService.get()
      .then(result => setData(result.data))
      .catch(err => console.log(err));
  }, [])

  const renderItem: ListRenderItem<Tile> = ({ item }) => (
    <HomeTile
      content={item}
      onPress={() => navigation.navigate(item.navigate, { type: item.paramType })}
    />
  );

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
        <TodayRow label={"Shadow Stones Dropped"} count={data?.SSLooted || 0} />
        <TodayRow label={"Adventures Completed"} count={data?.successfulCount || 0} />
        <TodayRow label={"Blockchain Items Looted"} count={data?.BCLooted || 0} />
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