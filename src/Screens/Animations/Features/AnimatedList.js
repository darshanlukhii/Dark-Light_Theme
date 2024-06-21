import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  withSpring,
} from 'react-native-reanimated';
import {fontSize, hp, wp} from '../../../utils/helper';
import {products} from '../../../dummy';

const HEIGHT = hp(300);
const MIN_HEIGHT = hp(1000);
const MAX_HEIGHT = hp(3000);

const AnimatedList = () => {
  const imageY = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler(event => {
    imageY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(
        interpolate(
          imageY.value,
          [0, imageY.value <= MIN_HEIGHT, imageY.value >= MAX_HEIGHT],
          [HEIGHT, 200, 100],
          Extrapolate.CLAMP,
        ),
        {damping: 20, stiffness: 100},
      ),
    };
  });

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.productContainer}
      activeOpacity={0.8}
      onPress={() => {}}>
      <Image source={{uri: item.thumbnail}} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productBrand}>{item.brand}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>${item.price}</Text>
          {item.discountPercentage > 0 && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>
                {item.discountPercentage}% OFF
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={products}
        bounces={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      <Animated.View style={[styles.headerImageContainer, headerStyle]}>
        <Animated.Image
          source={{uri: products[4]?.thumbnail}}
          style={[styles.headerImage, headerStyle]}
          resizeMode="cover"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerImageContainer: {
    height: HEIGHT,
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    overflow: 'hidden',
    borderBottomLeftRadius: wp(20),
    borderBottomRightRadius: wp(20),
  },
  headerImage: {
    height: '100%',
    width: '100%',
  },
  scrollViewContent: {
    paddingTop: HEIGHT,
    paddingBottom: 20,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: fontSize(16),
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  productBrand: {
    fontSize: fontSize(14),
    marginBottom: 5,
    color: '#666',
  },
  productDescription: {
    fontSize: fontSize(14),
    marginBottom: 10,
    color: '#888',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: fontSize(18),
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  discountBadge: {
    backgroundColor: '#FF5252',
    borderRadius: 5,
    marginLeft: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  discountText: {
    fontSize: fontSize(12),
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AnimatedList;
