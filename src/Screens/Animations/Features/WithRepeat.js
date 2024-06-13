// import React, {Component, useEffect} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import Animated, {
//   Easing,
//   useAnimatedStyle,
//   useSharedValue,
//   withRepeat,
//   withTiming,
// } from 'react-native-reanimated';

// const WithRepeat = () => {
//   const rotateValue = useSharedValue(0);

//   useEffect(() => {
//     rotateValue.value = withRepeat(
//       withTiming(2, {
//         duration: 2000,
//         easing: Easing.bounce,
//       }),
//     );
//   }, []);

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{rotate: `${rotateValue.value * 180}deg`}],
//   }));
//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.conStyle, animatedStyle]} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   conStyle: {
//     height: 100,
//     width: 100,
//     backgroundColor: 'pink',
//     borderRadius: 10,
//   },
// });

// export default WithRepeat;

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import CommonBack from '../../../Component/CommonBack';

const WithRepeat = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const rotateValue = useSharedValue(0);

  const toggleAnimation = () => {
    if (isAnimating) {
      rotateValue.value = 0;
    } else {
      rotateValue.value = withRepeat(
        withTiming(1, {
          duration: 2000,
          easing: Easing.bounce,
        }),
        -1,
        true,
      );
    }
    setIsAnimating(!isAnimating);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    //   transform: [{translateX: rotateValue.value}],
    transform: [{rotate: `${rotateValue.value * 180}deg`}],
  }));

  return (
    <View style={styles.container}>
      <CommonBack />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          flex: 1,
        }}>
        <Text style={styles.title}>Welcome to My App</Text>
        <Text style={styles.subtitle}>Enjoy the rotating logo!</Text>
        <TouchableOpacity onPress={toggleAnimation}>
          <Text style={styles.buttonText}>
            {isAnimating ? 'Stop' : 'Start'} Animation
          </Text>
        </TouchableOpacity>
        <Animated.View style={[styles.logo, animatedStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    backgroundColor: 'pink',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  },
});

export default WithRepeat;

