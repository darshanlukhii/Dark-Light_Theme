import React from 'react';
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
  withSpring,
} from 'react-native-reanimated';

const TABS_WIDTH = 140;
const TABS = ['Home', 'Search', 'Profile'];

const CustomTabBar = () => {
  const tabsDefaultValue = useSharedValue(-TABS_WIDTH);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: tabsDefaultValue.value}],
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
    tabsDefaultValue.value = withTiming(newTabValue(tab));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 40, marginBottom: 10}}>
        <FlatList
          data={TABS}
          style={{flex: 1}}
          numColumns={3}
          columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <Pressable
                key={item}
                style={
                  index !== TABS.length - 1
                    ? [styles.tab, styles.divider]
                    : styles.tab
                }
                onPress={() => handlePress(item)}>
                <Text style={styles.tabLabel}>{item}</Text>
              </Pressable>
            );
          }}
        />
      </View>
      <Animated.View style={[styles?.animatedBorder, animatedStyles]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 140,
  },
  tabLabel: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  divider: {
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  animatedBorder: {
    height: 3,
    width: 70,
    borderRadius: 20,
    backgroundColor: 'tomato',
    alignSelf: 'center',
  },
});

export default CustomTabBar;
