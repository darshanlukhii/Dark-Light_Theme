// import React, {Component, useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import CommonBack from '../../../Component/CommonBack';
// import Animated, {
//   interpolate,
//   interpolateColor,
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
// } from 'react-native-reanimated';

// const InterpolateScreen = () => {
//   const animatedValue = useSharedValue(1);
//   const [clicked, setClicked] = useState(false);

//   const animatedStyle = useAnimatedStyle(() => {
//     const width = interpolate(animatedValue.value, [1, 0], [100, 200]);
//     const backGroundColor = interpolateColor(
//       animatedValue.value,
//       [1, 0],
//       ['orange', 'blue'],
//     );
//     const borderRadius = interpolate(animatedValue.value,[1,0],[20, 100])
//     return {
//       width: width,
//       height: width,
//       backgroundColor: backGroundColor,
//       borderRadius: borderRadius
//     };
//   });

//   const handelButton = () => {
//     if (clicked) {
//       animatedValue.value = withSpring(1);
//     } else {
//       animatedValue.value = withSpring(0);
//     }
//     setClicked(!clicked);
//   };

//   return (
//     <View style={styles.container}>
//       <CommonBack />
//       <View style={styles.conStyle}>
//         <Animated.View style={[styles.box, animatedStyle]} />
//         <TouchableOpacity style={styles.btnStyle} onPress={handelButton}>
//           <Text>Click here</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   box: {
//     height: 100,
//     width: 100,
//     backgroundColor: 'orange',
//     borderRadius: 20,
//   },
//   btnStyle: {
//     height: 50,
//     width: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderRadius: 20,
//     marginTop: 30,
//   },
//   conStyle: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//   },
// });

// export default InterpolateScreen;

import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {images} from '../../../assets';
import CommonBack from '../../../Component/CommonBack';

const ProductCard = ({product}) => {
  const animatedValue = useSharedValue(1);
  const [clicked, setClicked] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    const height = interpolate(animatedValue.value, [1, 0], [200, 300]);
    const width = interpolate(animatedValue.value, [1, 0], [250, 375]);
    const backGroundColor = interpolateColor(
      animatedValue.value,
      [1, 0],
      ['#ffffff', '#e0f7fa'],
    );
    const borderRadius = interpolate(animatedValue.value, [1, 0], [30, 0]);
    return {
      width: width,
      height: height,
      backgroundColor: backGroundColor,
      borderRadius: borderRadius,
    };
  });

  const animatedImages = useAnimatedStyle(() => {
    const height = interpolate(animatedValue.value, [1, 0], [100, 200]);
    const width = interpolate(animatedValue.value, [1, 0], [160, 300]);
    const borderRadius = interpolate(animatedValue.value, [1, 0], [10, 0]);
    return {
      height: height,
      width: width,
      borderRadius: borderRadius,
    };
  });

  const handleCardPress = () => {
    if (clicked) {
      animatedValue.value = withSpring(1,{duration: 1000});
    } else {
      animatedValue.value = withSpring(0, {duration: 2000});
    }
    setClicked(!clicked);
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Animated.Image
        
          source={product.image}
          style={[styles.image, animatedImages]}
          resizeMode="stretch"
        />
        <Text style={styles.name} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.price} numberOfLines={1}>
          ${product.price.toFixed(2)}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const InterpolateScreen = () => {
  const products = [
    {
      id: 1,
      name: 'Nature Painting',
      price: 99.99,
      image: images.natural1,
    },
    {
      id: 2,
      name: 'Nature Painting',
      price: 199.99,
      image: images.natural2,
    },
    {
      id: 3,
      name: 'Nature Painting',
      price: 129.99,
      image: images.natural3,
    },
    {
      id: 4,
      name: 'Nature Painting',
      price: 999.99,
      image: images.natural4,
    },
    {
      id: 5,
      name: 'Nature Painting',
      price: 399.99,
      image: images.natural5,
    },
    {
      id: 6,
      name: 'Nature Painting',
      price: 599.99,
      image: images.natural6,
    },
    {
      id: 7,
      name: 'Nature Painting',
      price: 799.99,
      image: images.natural7,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <CommonBack />
      <Text style={styles.header}>Painting List</Text>
      <FlatList
        data={products}
        bounces={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  productList: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
  },
  price: {
    fontSize: 16,
    color: '#d32f2f',
  },
});

export default InterpolateScreen;
