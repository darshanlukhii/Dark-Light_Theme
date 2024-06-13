import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import {products} from '../../../dummy';
import CommonBack from '../../../Component/CommonBack';
import {fontSize, hp, isIos, wp} from '../../../utils/helper';

const HEADER_HEIGHT = hp(isIos ? 90 : 50);

const AnimatedHeader = () => {
  const translationY = useSharedValue(0);
  const scrollingUp = useSharedValue(true);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(
            scrollingUp.value || translationY.value <= 0 ? 0 : -HEADER_HEIGHT,
            {
              damping: 20,
              stiffness: 150,
            },
          ),
        },
      ],
      opacity: withSpring(
        scrollingUp.value ||
          translationY.value <= HEADER_HEIGHT ||
          translationY.value <= 0
          ? 1
          : 0,
        {
          damping: 20,
          stiffness: 150,
        },
      ),
    };
  });

  const scrollHandler = useAnimatedScrollHandler(event => {
    const currentY = event.contentOffset.y;
    scrollingUp.value = currentY < translationY.value;
    translationY.value = currentY;
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.headerStyle, animatedStyle]}>
        <CommonBack />
        <Text style={styles.headerLabel}>Shop Now</Text>
        <View style={{width: wp(50)}} />
      </Animated.View>
      <Animated.ScrollView
        bounces={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={{
          paddingTop: HEADER_HEIGHT,
        }}
        showsVerticalScrollIndicator={false}>
        {products.map(product => (
          <TouchableOpacity
            key={product.id}
            style={styles.productContainer}
            activeOpacity={0.8}>
            <Image
              source={{uri: product.thumbnail}}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{product.title}</Text>
              <Text style={styles.productBrand}>{product.brand}</Text>
              <Text style={styles.productDescription} numberOfLines={2}>
                {product.description}
              </Text>
              <View style={styles.priceRow}>
                <Text style={styles.productPrice}>${product.price}</Text>
                {product.discountPercentage > 0 && (
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>
                      {product.discountPercentage}% OFF
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
