import React from 'react';
import {View, StyleSheet, SafeAreaView, Button} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const WithTiming = () => {
  const defaultAnim = useSharedValue(0);

  const handlePress1 = () => {
    defaultAnim.value = withTiming(defaultAnim.value - 100, {
      duration: 1000,
      easing: Easing?.bounce,
    });
  };

  const handlePress2 = () => {
    defaultAnim.value = withTiming(defaultAnim.value + 100, {
      duration: 1000,
      easing: Easing?.bounce,
    });
  };

  const animatedBox = useAnimatedStyle(() => ({
    transform: [{translateY: withSpring(defaultAnim.value)}],
  }));

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20}} />
      <Button title="Click here" onPress={handlePress1} />
      <Animated.View style={[styles?.box, animatedBox]} />
      <Button title="Click here" onPress={handlePress2} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center'
  },
  box: {
    height: 80,
    width: 80,
    borderWidth: 1,
    // borderColor: '#b58df1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b58df1',
    alignSelf: 'center',
  },
});

export default WithTiming;
