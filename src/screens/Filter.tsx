import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItem
} from 'react-native';
import { SearchBar } from 'react-native-elements';

import { FilterProps } from '../App';
import ItemDataService from "../api/routes/items.route";
import IItemData from '../api/types/items.type';
import MapDataService from "../api/routes/maps.route";
import IMapData from '../api/types/maps.type';
import Item from '../components/Item';
import Map from '../components/Map';

const Filter = (props: FilterProps) => {
  const { route, navigation } = props;
  const { container, listContainer } = styles;
  const [data, setData] = useState<Array<IItemData | IMapData>>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    if (route.params.type === "map") {
      MapDataService.getAll()
        .then(result => setData(result.data))
    } else {
      ItemDataService.getAll()
        .then(result => setData(result.data))
    }
  }, []);

  const renderItem: ListRenderItem<IItemData> = ({ item }) => (
    <Item
      item={item}
      onPress={() =>
        navigation.navigate("Stats", { type: "Item", element: parseInt(item._id) })}
    />
  );

  const renderMap: ListRenderItem<IMapData> = ({ item }) => (
    <Map
      map={item}
      onPress={() => navigation.navigate("Stats", { type: "Map", element: item.name })}
    />
  );

  const filteredData = () => {
    if (filter === "")
      return data;
    else
      return data.filter(item => {
        const lowercasedName = item.name.toLowerCase();
        const lowercaseFilter = filter.toLowerCase();
        return lowercasedName.includes(lowercaseFilter);
      })
  }

  return (
    <View style={container}>
      {route.params.type === "item" && (
        <SearchBar
          containerStyle={{ width: "99%", backgroundColor: "black" }}
          placeholder="Type Here..."
          onChangeText={setFilter}
          value={filter}
        />
      )}
      <View style={listContainer}>
        <FlatList
          data={filteredData()}
          renderItem={route.params.type === "map" ? renderMap : renderItem}
          numColumns={route.params.type === "map" ? 1 : 2}
          keyExtractor={item => `${item._id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    backgroundColor: "black",
  },
  listContainer: {
    flex: 1,
    width: "95%",
    borderWidth: 1
  }
});

export default Filter;