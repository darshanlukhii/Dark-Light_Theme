import React from 'react';
import MainStackNavigator from './src/MainNavigation/MainStackNavigator';
import {ThemeProvider} from './src/utils/global';

const App = () => {
  return (
    <ThemeProvider>
      <MainStackNavigator />
    </ThemeProvider>
  );
};

export default App;
