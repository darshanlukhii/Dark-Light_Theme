import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Details from '../Screens/Details';
import Debounced from '../Screens/Debounced';
import Throttled from '../Screens/Throttled';
import Memo from '../Screens/Memo';
import WithCallback from '../Screens/WithCallback';

const Stack = createNativeStackNavigator();

const MainStackNavigator = ({value}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WithCallback" component={WithCallback} />
        <Stack.Screen name="Memo" component={Memo} />
        <Stack.Screen name="Throttled" component={Throttled} />
        <Stack.Screen name="Debounced" component={Debounced} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
