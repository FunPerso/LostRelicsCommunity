import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItem
} from 'react-native';

import { FilterProps } from '../App';

const Filter = (props: FilterProps) => {
  const { route } = props;

  return (
    <Text>{`Filter - ${route.params.type}`}</Text>
  );
};

export default Filter;