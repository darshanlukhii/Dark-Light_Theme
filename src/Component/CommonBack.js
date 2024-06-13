//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// create a component
const CommonBack = () => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.header}>
      <Button title="Back" onPress={goBack} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

//make this component available to the app
export default CommonBack;
