import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import CommonBack from '../../Component/CommonBack';

const HomeAnimation = () => {
  const {navigate} = useNavigation();
  const data = [
    {label: 'Button 1', navigate: 'InitialAnimation'},
    {label: 'Button 2', navigate: 'TestedAnimation'}, //withSpring
    {label: 'Button 3', navigate: 'WithTiming'}, // withTiming
    {label: 'CustomTabBar', navigate: 'CustomTabBar'}, // withTiming
    {label: 'Button 5', navigate: 'FallingWords'},
    {label: 'Button 6', navigate: 'WithRepeat'}, // withRepeat
    {label: 'CustomLoader', navigate: 'CustomLoader'},
    {label: 'Button 8', navigate: 'WithSequence'}, // WithSequence
    {label: 'Painting List', navigate: 'interpolate'}, // WithSequence
    {label: 'AnimatedHeader', navigate: 'AnimatedHeader'}, // WithSequence
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigate(item?.navigate)}>
      <Text style={styles.buttonText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.buttonContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeAnimation;
