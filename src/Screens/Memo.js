// import React, { useState } from 'react';
// import { View, FlatList, Button, Text, SafeAreaView } from 'react-native';

// // Mock data for workouts
// const mockWorkouts = [
//   { id: 1, name: 'Morning Run', duration: 45, caloriesBurned: 300 },
//   { id: 2, name: 'Afternoon Swim', duration: 60, caloriesBurned: 400 },
//   { id: 3, name: 'Evening Yoga', duration: 30, caloriesBurned: 150 },
//   { id: 4, name: 'Cycling', duration: 90, caloriesBurned: 600 },
//   { id: 5, name: 'Weightlifting', duration: 102, caloriesBurned: 250 },
//   { id: 6, name: 'Weightlifting', duration: 45, caloriesBurned: 250 },
// ];

// const Memo = () => {
//   const [filter, setFilter] = useState(null);

//   // Filtered workouts without useMemo
//   const filteredWorkouts = mockWorkouts.filter(workout => {
//     console.log('Filtering...');
//     return !filter || workout.duration <= filter;
//   });

//   console.log('Component rendered');

//   return (
//     <SafeAreaView>
//       <Button title="Filter by Duration (<= 60 mins)" onPress={() => setFilter(60)} />
//       <FlatList
//         data={filteredWorkouts}
//         renderItem={({ item }) => (
//           <View style={{alignSelf:'center', marginBottom: 20, marginTop: 10}}>
//             <Text>{item.name}</Text>
//             <Text>Duration: {item.duration} mins</Text>
//             <Text>Calories Burned: {item.caloriesBurned}</Text>
//           </View>
//         )}
//         keyExtractor={item => item.id.toString()}
//       />
//     </SafeAreaView>
//   );
// };

// export default Memo;

// // import React, { useState, useMemo } from 'react';
// // import { View, FlatList, Button, Text, SafeAreaView } from 'react-native';

// // // Mock data for workouts
// // const mockWorkouts = [
// //   { id: 1, name: 'Morning Run', duration: 45, caloriesBurned: 300 },
// //   { id: 2, name: 'Afternoon Swim', duration: 60, caloriesBurned: 400 },
// //   { id: 3, name: 'Evening Yoga', duration: 30, caloriesBurned: 150 },
// //   { id: 4, name: 'Cycling', duration: 90, caloriesBurned: 600 },
// //   { id: 5, name: 'Weightlifting', duration: 102, caloriesBurned: 250 },
// //   { id: 6, name: 'Weightlifting', duration: 45, caloriesBurned: 250 },
// // ];

// // const Memo = () => {
// //   const [filter, setFilter] = useState(null);

// //   // Filtered workouts with useMemo
// //   const filteredWorkouts = useMemo(() => {
// //     console.log('Filtering...');
// //     if (!filter) return mockWorkouts; // If no filter applied, return all workouts

// //     return mockWorkouts.filter(workout => workout.duration <= filter);
// //   }, [filter]);

// //   console.log('Component rendered');

// //   return (
// //     <SafeAreaView>
// //       <Button title="Filter by Duration (<= 60 mins)" onPress={() => setFilter(60)} />
// //       <FlatList
// //         data={filteredWorkouts}
// //         renderItem={({ item }) => (
// //           <View style={{alignSelf:'center', marginBottom: 20, marginTop: 10}}>
// //             <Text>{item.name}</Text>
// //             <Text>Duration: {item.duration} mins</Text>
// //             <Text>Calories Burned: {item.caloriesBurned}</Text>
// //           </View>
// //         )}
// //         keyExtractor={item => item.id.toString()}
// //       />
// //     </SafeAreaView>
// //   );
// // };

// // export default Memo;

import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, View, Text, TextInput, FlatList} from 'react-native';
import {dummy} from '../Component/Dummy';

const Memo = () => {
  const [search, setSearch] = useState('');

  // const filteredData = dummy.filter((item, index) => {
  //   console.log('Filtering data based on search query:', index);
  //   return item.title.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredData = useMemo(() => {
    const filter = dummy?.filter(item => 
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    return filter
  },[])


  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
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
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
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
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#555',
  },
});

export default Memo;
