import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Details = () => {
  const route = useRoute();
  const { product } = route.params;

  return (
    <View style={[styles.container, styles.homeBackground]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} resizeMode="contain" />
      </View>
      <View style={[styles.detailsContainer, styles.detailsBackground]}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.priceStockContainer}>
          <Text style={styles.titleText}>Price:</Text>
          <Text style={styles.valueText}>${product.price}</Text>
        </View>
        <View style={styles.priceStockContainer}>
          <Text style={styles.titleText}>In Stock:</Text>
          <Text style={styles.valueText}>{product.stock}</Text>
        </View>
        <Text style={styles.rating}>Rating: {product.rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  homeBackground: {
    backgroundColor: '#000',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  thumbnail: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  detailsContainer: {
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  detailsBackground: {
    backgroundColor: '#333', // Adjust the color here to match the background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00ff00',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#00ff00',
  },
  priceStockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00ff00',
  },
  valueText: {
    fontSize: 18,
    color: '#fff', // Adjust the color for value text
  },
  rating: {
    fontSize: 18,
    color: '#00ff00',
  },
});

export default Details;
