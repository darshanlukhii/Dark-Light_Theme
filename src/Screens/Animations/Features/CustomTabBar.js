import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import CommonBack from '../../../Component/CommonBack';
import { hp, wp } from '../../../utils/helper';

const TABS_WIDTH = wp(120);
const TABS = ['Home', 'Search', 'Profile'];

const HomeScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.screenText}>Home Screen</Text>
  </View>
);

const SearchScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.screenText}>Search Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.screenText}>Profile Screen</Text>
  </View>
);

const CustomTabBar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const tabsDefaultValue = useSharedValue(-TABS_WIDTH);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: tabsDefaultValue.value }],
  }));

  const newTabValue = tab => {
    switch (tab) {
      case 'Home':
        return -TABS_WIDTH;
      case 'Search':
        return 0;
      case 'Profile':
        return TABS_WIDTH;
      default:
        return -TABS_WIDTH;
    }
  };

  const handlePress = tab => {
    setActiveTab(tab);
    tabsDefaultValue.value = withTiming(newTabValue(tab));
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Search':
        return <SearchScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CommonBack />
      <View style={styles.content}>
        <View style={styles.tabContainer}>
          <FlatList
            data={TABS}
            style={{ flex: 1 }}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Pressable
                key={item}
                style={styles.tab}
                onPress={() => handlePress(item)}>
                <Text style={[styles.tabLabel, activeTab === item && styles.activeTabLabel]}>
                  {item}
                </Text>
              </Pressable>
            )}
          />
        </View>
        <Animated.View style={[styles.animatedBorder, animatedStyles]} />
        <View style={styles.screenContainer}>{renderScreen()}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6c757d',
  },
  activeTabLabel: {
    color: '#007bff',
  },
  animatedBorder: {
    height: 3,
    width: wp(60),
    borderRadius: 20,
    backgroundColor: '#007bff',
    alignSelf: 'center',
    marginTop: -3,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
  },
});

export default CustomTabBar;
