import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {products} from '../dummy';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../utils/global';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const textInputRef = useRef(null);
  const {theme, toggleTheme} = useTheme();
  const styles = themedStyles(theme);

  const handleDeleteItem = item => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const updatedProducts = products.filter(
              product => product.id !== item.id,
            );
            console.log('Deleted Item:', item);
            console.log('Updated Products:', updatedProducts);
          },
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };

  const handleEditItem = item => {
    console.log('Edit Item:', item);
  };

  const handlePress = item => {
    navigation.navigate('Details', {product: item});
  };

  const renderHeader = (searchText, setSearchText, handleClearSearch) => (
    <TouchableWithoutFeedback onPress={() => textInputRef.current.blur()}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Product List</Text>
        <View style={styles.searchContainer}>
          <TextInput
            ref={textInputRef}
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor={theme.headerTextColor}
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
          {searchText !== '' && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={handleClearSearch}>
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  const renderItem = ({item}) => (
    <TouchableWithoutFeedback onPress={() => handlePress(item)}>
      <View style={styles.listItem}>
        <Image
          source={{uri: item?.images[0]}}
          style={styles.productImage}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.description}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  const renderHiddenItem = ({item}) => (
    <View style={styles.hiddenItemContainer}>
      <TouchableOpacity
        style={[styles.hiddenItem, styles.leftHiddenItem]}
        onPress={() => handleDeleteItem(item)}>
        <Text style={styles.hiddenItemText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.hiddenItem, styles.rightHiddenItem]}
        onPress={() => handleEditItem(item)}>
        <Text style={styles.hiddenItemText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );

  const filteredProducts = products.filter(product =>
    product.description.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleClearSearch = () => setSearchText('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.themeBackGroundStyle} onPress={toggleTheme}>
        <Text style={styles.themeTextStyle}>Theme</Text>
      </TouchableOpacity>
      {renderHeader(searchText, setSearchText, handleClearSearch)}
      {filteredProducts.length === 0 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No data found</Text>
        </View>
      ) : (
        <SwipeListView
          tension={40}
          friction={1000}
          bounces={false}
          leftOpenValue={105}
          rightOpenValue={-105}
          closeOnRowOpen={true}
          data={filteredProducts}
          renderItem={renderItem}
          previewOpenDelay={3000}
          renderHiddenItem={renderHiddenItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const themedStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    header: {
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor,
    },
    headerText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: theme.headerTextColor,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchInput: {
      marginTop: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderWidth: 1.5,
      borderColor: theme.searchInputBorder,
      borderRadius: 25,
      width: '80%',
      color: theme.searchInputTextColor,
    },
    clearButton: {
      marginLeft: 10,
    },
    clearButtonText: {
      color: theme.clearButtonTextColor,
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      backgroundColor: theme.listItemBackground,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor,
    },
    productImage: {
      width: 60,
      height: 60,
      borderRadius: 10,
      marginRight: 15,
    },
    itemText: {
      flex: 1,
      fontSize: 16,
      color: theme.itemTextColor,
      fontWeight: '500',
    },
    hiddenItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      marginTop: 10,
    },
    hiddenItem: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 75,
      height: '100%',
      borderRadius: 8,
    },
    leftHiddenItem: {
      backgroundColor: theme.deleteButtonColor,
    },
    rightHiddenItem: {
      backgroundColor: theme.editButtonColor,
    },
    hiddenItemText: {
      color: theme.hiddenItemTextColor,
      fontSize: 16,
      fontWeight: 'bold',
    },
    noDataContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noDataText: {
      fontSize: 18,
      color: theme.noDataTextColor,
    },
    themeBackGroundStyle: {
      alignSelf: 'flex-end',
      height: 30,
      width: 70,
      backgroundColor: theme.editButtonColor,
      borderRadius: 10,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    themeTextStyle: {
      color: theme.headerTextColor,
    },
  });

export default Home;
