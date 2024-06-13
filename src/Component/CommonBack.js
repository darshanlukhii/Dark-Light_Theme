import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {fontSize, hp, wp} from '../utils/helper';

const CommonBack = () => {
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity style={styles.header} onPress={goBack}>
      <Text style={styles.backBtnStyle}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backBtnStyle: {
    color: 'blue',
    paddingVertical: hp(10),
    fontSize: fontSize(16),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default CommonBack;
