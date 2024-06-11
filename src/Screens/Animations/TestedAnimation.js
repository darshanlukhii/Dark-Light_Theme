import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Button} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const TestedAnimation = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value * 1}],
  }));

  const animatedYStyles = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value * 1}],
  }));

  const pressButton1 = () => {
    translateX.value = withSpring(translateX.value - 10);
    translateY.value = withSpring(translateY.value - 50);
  };
  
  const pressButton2 = () => {
    translateX.value = withSpring(translateX.value + 10);
    translateY.value = withSpring(translateY.value + 50);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20}} />
      <Button title="Click me" onPress={pressButton1} />
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button title="Click me" onPress={pressButton2} />
      <Animated.View style={[styles.box, animatedYStyles]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center'
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
});

export default TestedAnimation;
