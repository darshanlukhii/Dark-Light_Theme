// import React, { useState } from 'react';
// import { View, FlatList, Button, Text, SafeAreaView } from 'react-native';

// // Mock data for workouts
// const mockWorkouts = [
//   { id: 1, name: 'Morning Run', duration: 45, caloriesBurned: 300 },
//   { id: 2, name: 'Afternoon Swim', duration: 60, caloriesBurned: 400 },
//   { id: 3, name: 'Evening Yoga', duration: 30, caloriesBurned: 150 },
//   { id: 4, name: 'Cycling', duration: 90, caloriesBurned: 600 },
//   { id: 5, name: 'Weightlifting', duration: 45, caloriesBurned: 250 },
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
//           <View>
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

import React, { useState, useMemo } from 'react';
import { View, FlatList, Button, Text, SafeAreaView } from 'react-native';

// Mock data for workouts
const mockWorkouts = [
  { id: 1, name: 'Morning Run', duration: 45, caloriesBurned: 300 },
  { id: 2, name: 'Afternoon Swim', duration: 60, caloriesBurned: 400 },
  { id: 3, name: 'Evening Yoga', duration: 30, caloriesBurned: 150 },
  { id: 4, name: 'Cycling', duration: 90, caloriesBurned: 600 },
  { id: 5, name: 'Weightlifting', duration: 45, caloriesBurned: 250 },
];

const Memo = () => {
  const [filter, setFilter] = useState(null);

  // Filtered workouts with useMemo
  const filteredWorkouts = useMemo(() => {
    console.log('Filtering...');
    if (!filter) return mockWorkouts; // If no filter applied, return all workouts

    return mockWorkouts.filter(workout => workout.duration <= filter);
  }, [filter]);

  console.log('Component rendered');

  return (
    <SafeAreaView>
      <Button title="Filter by Duration (<= 60 mins)" onPress={() => setFilter(60)} />
      <FlatList
        data={filteredWorkouts}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>Duration: {item.duration} mins</Text>
            <Text>Calories Burned: {item.caloriesBurned}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Memo;
