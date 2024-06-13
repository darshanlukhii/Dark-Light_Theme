// import React, {useEffect} from 'react';
// import {StyleSheet, View, Text, Dimensions} from 'react-native';
// import Animated, {
//   Easing,
//   useSharedValue,
//   useAnimatedStyle,
//   withRepeat,
//   withTiming,
// } from 'react-native-reanimated';

// const {height, width} = Dimensions.get('window');

// console.log('height', height)

// const FallingWord = ({word, delay}) => {
//   const translateY = useSharedValue(0);

//   useEffect(() => {
//     translateY.value = withRepeat(
//       withTiming(height, {
//         duration: 3000,
//         easing: Easing.linear,
//       }),
//       -1,
//       false,
//     );
//   }, [delay, translateY]);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{translateY: translateY.value}],
//     };
//   });

//   return (
//     <Animated.View style={[styles.wordContainer, animatedStyle]}>
//       <Text style={styles.word}>{word}</Text>
//     </Animated.View>
//   );
// };

// const FallingWords = () => {
//   // Array of words to animate
//   const words = ['HACK', 'CYBER', 'DATA', 'CODE', 'SECURE', 'ACCESS', 'BREACH'];

//   return (
//     <View style={styles.container}>
//       {words.map((word, index) => (
//         <FallingWord key={index} word={word}/>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   wordContainer: {
//     flex: 1,
//   },
//   word: {
//     fontSize: 20,
//     color: 'lime',
//     fontFamily: 'monospace',
//   },
// });

// export default FallingWords;

import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {images} from '../../../assets';
import CommonBack from '../../../Component/CommonBack';

const FallingWords = () => {
  // const words = ['HACK', 'CYBER', 'DATA', 'CODE', 'SECURE', 'ACCESS', 'BREACH'];
  const words = [
    images?.natural1,
    images?.natural2,
    images?.natural3,
    images?.natural4,
    images?.natural5,
    images?.natural6,
    images?.natural7,
  ];
  const {height} = Dimensions.get('screen');

  const animatedStyles = words.map(() => {
    const sharedValue = useSharedValue(0);

    useEffect(() => {
      sharedValue.value = withRepeat(
        withTiming(height, {
          duration: 3000,
          easing: Easing.linear,
        }),
        -1,
        false,
      );
    }, [sharedValue]);

    return useAnimatedStyle(() => ({
      transform: [{translateY: sharedValue.value}],
    }));
  });

  return (
    <View style={styles.container}>
      <CommonBack />
      <FlatList
        data={words}
        style={{flex: 1}}
        // contentContainerStyle={{flexGrow: 1}}
        renderItem={({item, index}) => {
          return (
            <Animated.View style={[styles.wordContainer, animatedStyles]}>
              {/* <Text style={styles.word}>{item}</Text> */}
              <Image source={item} style={styles.image} resizeMode="contain" />
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40
  },
  wordContainer: {
    flex: 1,
  },
  word: {
    fontSize: 20,
    color: 'lime',
    fontFamily: 'monospace',
  },
  image: {
    // flex: 1,
    height: 300,
    width:'100%'
  },
});

export default FallingWords;
