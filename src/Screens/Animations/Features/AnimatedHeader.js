import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {products} from '../../../dummy';
import {fontSize, hp, isIos, wp} from '../../../utils/helper';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import CommonBack from '../../../Component/CommonBack';

const HEADER_HEIGHT = hp(isIos ? 90 : 60);

const AnimatedHeader = () => {
  const headerAnimatedValue = useSharedValue(0);
  const scrollingUp = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(
            headerAnimatedValue.value <= 0 || scrollingUp.value
              ? 0
              : -HEADER_HEIGHT,
            {
              damping: 20,
              stiffness: 130,
            },
          ),
        },
      ],
    };
  });

  const scrollHandler = useAnimatedScrollHandler(event => {
    const currentY = event.contentOffset.y;
    scrollingUp.value = currentY < headerAnimatedValue.value;
    headerAnimatedValue.value = currentY;
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.headerStyle, animatedStyle]}>
        <CommonBack />
        <Text style={styles.headerLabel}>Shop Now</Text>
        <View style={{width: wp(50)}} />
      </Animated.View>
      <Animated.FlatList
        bounces={false}
        data={products}
        onScroll={scrollHandler}
        ListFooterComponent={() => {
          return <View style={{marginBottom: HEADER_HEIGHT + hp(10)}}/>
        }}
        style={{flex: 1, paddingVertical: HEADER_HEIGHT}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.productContainer}
              activeOpacity={0.8}>
              <Image
                source={{uri: item.thumbnail}}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productBrand}>{item.brand}</Text>
                <Text style={styles.productDescription} numberOfLines={2}>
                  {item.description}
                </Text>
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
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerLabel: {
    color: '#fff',
    fontWeight: '700',
    fontSize: fontSize(18),
  },
  headerStyle: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    height: HEADER_HEIGHT,
    backgroundColor: '#4CAF50',
    justifyContent: 'space-between',
    paddingTop: hp(isIos ? 30 : 0),
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
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
    backgroundColor: '#FFC107',
    borderRadius: 5,
    marginLeft: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  discountText: {
    fontSize: fontSize(12),
    fontWeight: 'bold',
    color: '#333',
  },
});

export default AnimatedHeader;
