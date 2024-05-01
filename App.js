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

// ThemeContext.js (create a separate file for this)
// import React from 'react';
// import { Text, View, Button, StyleSheet } from 'react-native';
// import { ThemeProvider, useTheme } from './src/utils/global';

// const MyScreen = () => {
//   const { theme, toggleTheme } = useTheme();

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: theme.backgroundColor,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     text: {
//       color: theme.textColor,
//       fontSize: 20,
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         This is a {theme.backgroundColor === '#fff' ? 'light' : 'dark'} themed
//         screen!
//       </Text>
//       <Button title="Toggle Theme" onPress={toggleTheme} />
//     </View>
//   );
// };

// export default () => (
//   <ThemeProvider>
//     <MyScreen />
//   </ThemeProvider>
// );
