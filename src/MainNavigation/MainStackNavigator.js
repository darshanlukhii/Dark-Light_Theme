import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Details from '../Screens/Details';
import Debounced from '../Screens/Debounced';
import Throttled from '../Screens/Throttled';
import Memo from '../Screens/Memo';
import WithCallback from '../Screens/WithCallback';
import AnimatedScreen from '../Screens/AnimatedScreen';
import InitialAnimation from '../Screens/Animations/InitialAnimation';
import TestedAnimation from '../Screens/Animations/TestedAnimation';
import WithTiming from '../Screens/Animations/WithTiming';
import CustomTabBar from '../Screens/Animations/Features/CustomTabBar';

const Stack = createNativeStackNavigator();

const MainStackNavigator = ({value}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CustomTabBar" component={CustomTabBar} />
        <Stack.Screen name="InitialAnimation" component={InitialAnimation} />
        <Stack.Screen name="WithTiming" component={WithTiming} />
        <Stack.Screen name="TestedAnimation" component={TestedAnimation} />
        <Stack.Screen name="AnimatedScreen" component={AnimatedScreen} />
        <Stack.Screen name="Memo" component={Memo} />
        <Stack.Screen name="WithCallback" component={WithCallback} />
        <Stack.Screen name="Throttled" component={Throttled} />
        <Stack.Screen name="Debounced" component={Debounced} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
