import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Dimensions,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const InitialAnimation = () => {
  //   const width = useSharedValue(100);
  //   const height = useSharedValue(100);

  // moves to the right on every button press
  //   const translateX = useSharedValue(0);

  //   Configuring withTiming
  // const defaultAnim = useSharedValue(0);

  // Configuring withTiming .....
  const defaultAnim = useSharedValue(0);

  // ------------------------------------------------------------------------------------------------------------------------------------

  //   const handlePress = () => {
  //     width.value = withSpring(width.value + 50);
  //     height.value = withSpring(height.value + 50);
  //   };

  //   const handleReversePress = () => {
  //     width.value = withSpring(width.value - 50);
  //     height.value = withSpring(height.value - 50);
  //   };

  // moves to the right on every button press
  //   const animatedStyles = useAnimatedStyle(() => ({
  //     transform: [{translateY: translateX.value * 1}],
  //   }));

  //   const pressButton1 = () => {
  //     translateX.value = withSpring(translateX.value - 50);
  //   };

  //   const pressButton2 = () => {
  //     translateX.value = withSpring(translateX.value + 50);
  //   };

  // Configuring withTiming .....
  // useEffect(() => {
  //   defaultAnim.value =
  //     withTiming(200, {
  //       duration: 2000,
  //       easing: Easing.bounce,
  //     })
  // }, []);

  // Configuring withRepeat .....
  useEffect(() => {
    defaultAnim.value = withRepeat(
      withTiming(200, {
        duration: 2000,
        easing: Easing.bounce,
      }),
      -1,
      true,
    );
  }, []);

  const animatedBox = useAnimatedStyle(() => ({
    transform: [{translateY: defaultAnim.value + 50}],
  }));

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20}} />
      {/* initialAnimation */}
      {/* <Text onPress={() => (width.value += 50)} style={{marginBottom: 20}}>
        InitialAnimation
      </Text>
      <Animated.View style={{height: 100, width, backgroundColor: 'violet'}} />
      <Text onPress={() => (width.value -= 50)} style={{marginBottom: 20}}>
        InitialAnimation
      </Text> */}

      {/* Animation with the withSpring */}
      {/* <Button title="Click me" onPress={handlePress} />
      <Animated.View
        style={{height, width, backgroundColor: 'violet', borderRadius: 25}}
      />
      <Button title="Click me" onPress={handleReversePress} /> */}

      {/* moves to the right on every button press */}
      {/* <Button title="Click me" onPress={pressButton1} />
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button title="Click me" onPress={pressButton2} /> */}

      {/* Configuring withTiming */}
      {/* <Animated.View style={[styles?.box, animatedBox]} /> */}

      {/* Configuring withRepeat */}
      <Animated.View style={[styles?.box, animatedBox]} />
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
    margin: 20,
    borderWidth: 1,
    // borderColor: '#b58df1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b58df1',
  },
});

export default InitialAnimation;
