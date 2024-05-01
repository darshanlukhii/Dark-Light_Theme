import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Image,
} from 'react-native';

const TinderCard = ({card, onSwipe}) => {
  const pan = useState(new Animated.ValueXY())[0];
  const swipeDirectionRef = useRef(null);

  const shadowOpacity = pan.x.interpolate({
    inputRange: [-120, 0, 120],
    outputRange: [0.2, 0.5, 0.2],
    extrapolate: 'clamp',
  });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (e, gesture) => {
      if (Math.abs(gesture.dx) > 120 || Math.abs(gesture.dy) > 120) {
        const direction = gesture.dx > 0 ? 'right' : 'left';
        swipeDirectionRef.current = direction;
        onSwipe(direction);
      } else {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          friction: 6,
          tension: 50,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const animatedCardStyles = {
    transform: [{translateX: pan.x}, {translateY: pan.y}],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: shadowOpacity,
    shadowRadius: 10,
    elevation: 5,
  };

  console.log('swipeDirectionRef', swipeDirectionRef);

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.card, animatedCardStyles]}>
        <View style={styles.cardStyle}>
          <Image source={{uri: card.thumbnail}} style={styles.thumbnail} />
          <View style={styles.cardContent}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.description}>{card.description}</Text>
            <Text style={styles.price}>Price: ${card.price}</Text>
            <Text style={styles.stock}>Stock: {card.stock}</Text>
          </View>
          {swipeDirectionRef.current === 'left' && (
            <Text style={styles.likeLabel}>Like</Text>
          )}
          {swipeDirectionRef.current === 'right' && (
            <Text style={styles.nopeLabel}>Nope</Text>
          )}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    backgroundColor: 'green',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  stock: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  likeLabel: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nopeLabel: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TinderCard;
