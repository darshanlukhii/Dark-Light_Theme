import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import CommonBack from '../../../Component/CommonBack';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const WithSequence = () => {
  const {width} = Dimensions?.get('window');
  const offset = useSharedValue(200);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: offset?.value}],
  }));

  useEffect(() => {
    offset.value = withRepeat(
      withSequence(
        withTiming(300, {duration: 800, easing: Easing.cubic}),
        withTiming(150, {duration: 800, easing: Easing.cubic}),
        withTiming(10, {duration: 800, easing: Easing.cubic}),
      ),
      -1,
      true,
    );
  }, []);

  return (
    <View style={styles.container}>
      <CommonBack />
      <View style={{flex: 1, justifyContent: 'center', }}>
        <Animated.View style={[styles.boxStyle, animatedStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxStyle: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'pink',
    marginBottom: 80,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});

export default WithSequence;
