// import React, {useEffect, useState} from 'react';
// import {StyleSheet, View, Text, FlatList} from 'react-native';
// import Animated, {
//   Easing,
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   withRepeat,
// } from 'react-native-reanimated';
// import CommonBack from '../../../Component/CommonBack';

// const LoadingSpinner = () => {
//   const rotation = useSharedValue(0);

//   rotation.value = withRepeat(
//     withTiming(360, {
//       duration: 1000,
//       easing: Easing.linear,
//     }),
//     -1,
//   );

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{rotate: `${rotation.value}deg`}],
//     };
//   });

//   return (
//     <Animated.View style={[styles.spinner, animatedStyle]}>
//       <View style={styles.spinnerSegment} />
//       <View style={[styles.spinnerSegment, styles.spinnerSegmentTwo]} />
//       <View style={[styles.spinnerSegment, styles.spinnerSegmentThree]} />
//       <View style={[styles.spinnerSegment, styles.spinnerSegmentFour]} />
//     </Animated.View>
//   );
// };

// const CustomLoader = () => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       const dummyData = Array.from({length: 10}, (_, i) => `Item ${i + 1}`);
//       setData(dummyData);
//       setLoading(false);
//     }, 3000);
//   }, []);

//   return (
//     <View style={styles.container}>
//       {!loading && <CommonBack />}
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         {loading ? (
//           <LoadingSpinner />
//         ) : (
//           <FlatList
//             data={data}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({item}) => <Text style={styles.dataText}>{item}</Text>}
//           />
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     backgroundColor: '#f5fcff',
//   },
//   spinner: {
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//   },
//   spinnerSegment: {
//     position: 'absolute',
//     width: 10,
//     height: 34,
//     backgroundColor: 'tomato',
//     borderRadius: 4,
//   },
//   spinnerSegmentTwo: {
//     transform: [{rotate: '120deg'}],
//   },
//   spinnerSegmentThree: {
//     transform: [{rotate: '180deg'}],
//   },
//   spinnerSegmentFour: {
//     transform: [{rotate: '240deg'}],
//   },
//   dataText: {
//     fontSize: 18,
//     color: 'black',
//     padding: 10,
//   },
// });

// export default CustomLoader;

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import CommonBack from '../../../Component/CommonBack';

const LoadingSpinner = () => {
  const rotation = useSharedValue(0);

  rotation.value = withRepeat(
    withTiming(360, {
      duration: 1000,
      easing: Easing.linear,
    }),
    -1,
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });

  return (
    <Animated.View style={[styles.spinner, animatedStyle]}>
      <View style={styles.spinnerSegment} />
      <View style={[styles.spinnerSegment, styles.spinnerSegmentTwo]} />
      <View style={[styles.spinnerSegment, styles.spinnerSegmentThree]} />
      <View style={[styles.spinnerSegment, styles.spinnerSegmentFour]} />
    </Animated.View>
  );
};

const CustomLoader = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // Simulate fetching data
      const dummyData = Array.from({length: 10}, (_, i) => ({
        id: i.toString(),
        title: `Product ${i + 1}`,
        description: `Description for Product ${i + 1}`,
        price: (Math.random() * 100).toFixed(2),
      }));
      setData(dummyData);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {!loading && <CommonBack />}
      <View style={{flex: 1, justifyContent: 'center', bottom: loading && 50}}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <View style={styles.content}>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={styles.itemContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.price}>Price: ${item.price}</Text>
                </View>
              )}
              ListEmptyComponent={() => (
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>No products found</Text>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 40,
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  spinner: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    alignSelf: 'center',
    marginTop: 50,
  },
  spinnerSegment: {
    position: 'absolute',
    width: 10,
    height: 34,
    backgroundColor: 'tomato',
    borderRadius: 4,
  },
  spinnerSegmentTwo: {
    transform: [{rotate: '120deg'}],
  },
  spinnerSegmentThree: {
    transform: [{rotate: '180deg'}],
  },
  spinnerSegmentFour: {
    transform: [{rotate: '240deg'}],
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'tomato',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
  },
});

export default CustomLoader;
