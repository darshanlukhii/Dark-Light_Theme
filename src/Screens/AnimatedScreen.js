import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {dummy} from '../Component/Dummy';
import {MotiView} from 'moti';

const AnimatedScreen = () => {
  const [search, setSearch] = useState('');

  const filteredData = dummy.filter(item => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  const renderItem = ({item, index}) => (
    <MotiView
      style={[
        styles.item,
        {
          width: '48%',
          backgroundColor: index % 4 === 0 ? '#F8BBD0' : '#81D4FA',
        },
      ]}
      from={{opacity: 0, translateY: 50}}
      animate={{opacity: 1, translateY: 0}}
      transition={{delay: 100 + index * 200}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </MotiView>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          value={search}
          onChangeText={text => {
            setSearch(text);
          }}
        />
        <FlatList
          data={filteredData}
          bounces={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 5, // Added horizontal margin for spacing between columns
    borderRadius: 10, // Increased border radius for a more rounded look
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5, // Added margin bottom for spacing between title and body
    color: '#FFF', // Text color
  },
  body: {
    fontSize: 14,
    color: '#FFF', // Text color
  },
  flatListContent: {
    paddingHorizontal: 5,
    paddingTop: 5,
    justifyContent: 'space-between',
  },
});

export default AnimatedScreen;
