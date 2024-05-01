import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {useTheme} from '../utils/global';

const Details = () => {
  const route = useRoute();
  const {product} = route.params;
  const {theme, toggleTheme} = useTheme();
  const styles = themedStyles(theme);

  return (
    <View style={[styles.container, styles.homeBackground]}>
      <SafeAreaView>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: product.thumbnail}}
            style={styles.thumbnail}
            resizeMode="contain"
          />
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
      </SafeAreaView>
    </View>
  );
};

const themedStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    homeBackground: {
      backgroundColor: theme.cardBackgroundColor,
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 20,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: theme.cardImageBorderColor,
      marginHorizontal: 20,
    },
    thumbnail: {
      width: 200,
      height: 200,
    },
    detailsContainer: {
      borderRadius: 10,
      padding: 20,
      elevation: 5,
      shadowColor: theme.shadowColor, // Shadow color for iOS
      shadowOffset: {width: 0, height: 2}, // Shadow offset for iOS
      shadowOpacity: 0.25, // Shadow opacity for iOS
      shadowRadius: 3, // Shadow radius for iOS
    },
    detailsBackground: {
      backgroundColor: theme.subCardBGColor,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme.itemTextColor,
    },
    description: {
      fontSize: 16,
      marginBottom: 20,
      color: theme.itemTextColor,
    },
    priceStockContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.itemTextColor,
    },
    valueText: {
      fontSize: 18,
      color: theme.textColor,
    },
    rating: {
      fontSize: 18,
      color: theme.itemTextColor,
    },
  });

export default Details;

