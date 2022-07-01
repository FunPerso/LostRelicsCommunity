import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Stats from './screens/Stats';
import Filter from './screens/Filter';

export type RootStackParamList = {
  Home: undefined;
  Stats: undefined;
  Filter: { type: String };
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type StatsProps = NativeStackScreenProps<RootStackParamList, 'Stats'>;
export type FilterProps = NativeStackScreenProps<RootStackParamList, 'Filter'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
