import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItem
} from 'react-native';

import { StatsProps } from '../App';

const Stats = (props: StatsProps) => {
  const { navigation } = props;

  return (
    <Text>Stats</Text>
  );
};

export default Stats;